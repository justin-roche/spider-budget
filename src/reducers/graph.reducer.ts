import { AddNodeActions } from '../actions/add-node.actions';
import { Graph } from './Graph';

let nodes = [
        {id: 1, label: 'Income', data: {}},
        {id: 2, label: 'Expenses', data: {}},
];

let edges = [
         {from: 1, to: 2},
];

let defaultGraph = new Graph(nodes, edges);

const keys = {
  'ADD-NODE': addNode,
}

function addNode(graph, action){
  let s = graph.addNode({data: action.payload});
  let parents = action.payload.parentNodes.split(",");
  while(parents.length > 0){
    s = s.addEdge({from: parents.pop(), to: s.nodes.length});
  }
  return s;
}

export function graphReducer(graph: any=defaultGraph, action:any) {
  if(keys[action.type]){
    return keys[action.type](graph, action);
  } else {
    return graph;
  }
}


