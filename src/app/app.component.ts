import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension, select } from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {AddNodeComponent} from '../add-node/add-node.component';
import {CalculatorComponent} from '../calculator/calculator.component';
import {VisRenderComponent} from '../vis-render/vis-render.component';
import {rootReducer } from '../reducers/root.reducer';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  @select('ui') ui;
  
  constructor(private ngRedux: NgRedux<any>) {

    

    // var c = 0;

    // var p1 = new Promise(function(resolve, reject){
    //   setTimeout(resolve(0),1000);
    // })

    //  var p2 = new Promise(function(resolve, reject){
    //   setTimeout(resolve(1),1000);
    // })

    // var p3 = new Promise(function(resolve, reject){
    //   setTimeout(resolve(2),1000);
    // })

    // var o1 = Rx.Observable.fromPromise(p1);
    // var o2 = Rx.Observable.fromPromise(p2);
    // var o3 = Rx.Observable.fromPromise(p3);


    // o1.subscribe(function(v){
    //   console.log(v);
    // });

    // o2.subscribe((v)=>{
    //   console.log(v);
    // })

    // o3.subscribe((v)=>{
    //   console.log(v);
    // });

    // Rx.Observable.forkJoin([o1,o2,o3]).subscribe((v)=>{
    //   console.log(v);
    // });

  }

}
