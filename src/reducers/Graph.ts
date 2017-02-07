export function nodeById(id, graph){

}

interface Node{
    id: Number;
    data: Object;
    label: String;
}

interface Edge{
    from: Number;
    to: Number;
}

export class Graph{
    nodes: Array<Node>;
    edges: Array<Object>;

    constructor(nodes, edges){
        this.nodes = nodes || [];
        this.edges = edges || [];
    }

    selectNode({id}){
        return (this.nodes.filter((node)=>{
            return node.id === id;
            }
        )[0]);
    }

    addNode({data}){
        let currentId = this.nodes.length+1;
        let newNode = {
            data,
            id: currentId,
            label: 'Node'+currentId,
        }
        return new Graph(this.nodes.concat([newNode]), this.edges);
    }

    addEdge({from, to}){
        return new Graph(this.nodes, this.edges.concat({from, to}));
    }

    // addNodes(nodes){
    //     let newId = this.nodes.length;
    //     nodes.forEach((newNode)=>{
    //         newNode.id = newId++;
    //         newNode.label = 'Node'+newId
    //     });

    //     return new Graph(this.nodes.concat(nodes), this.edges);
    // }

    // addEdges(edges){
        
    // }
}