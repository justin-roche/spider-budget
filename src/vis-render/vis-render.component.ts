import { Component, AfterViewInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { VisRenderActions } from '../actions/vis-render.actions';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'vis-render',
  templateUrl: './vis-render.component.html',
  styles: [`#graph {
            width: 1000px;
            height: 1000px;
            border: 1px solid lightgray;
        }`],
})

export class VisRenderComponent implements AfterViewInit{

  private graph;

  constructor(public actions: VisRenderActions,private ngRedux: NgRedux<any>) {}

  render(graph){
   
    let network = this.createNetwork(graph);
    this.addListeners(network);
  }

  createNetwork(graph){
    let nodes = new vis.DataSet(graph.nodes);
    let edges = new vis.DataSet(graph.edges);
    let container = document.getElementById('graph');
    let data = {
        nodes: nodes,
        edges: edges,
    };
    let options = {};
    let network = new vis.Network(container, data, options);
    return network;
  }

  addListeners(network){
    network.on("selectNode",  (params) =>{
      let id = params.nodes[0];
      this.ngRedux.dispatch({type: 'VIEW-INSPECT-NODE', payload: {id:id}});
      return true;
    });

    network.on("doubleClick",  (params) =>{
      let id = params.nodes[0];
      this.ngRedux.dispatch({type: 'VIEW-ADD-NODE', payload: {id:id}});
    });
  }

  ngAfterViewInit(){
    /*afterviewinit required to get child dom element in first render*/
    this.graph = this.ngRedux.select(['graph']).subscribe((graph)=>{
      this.render(graph);
    });
  }

}

