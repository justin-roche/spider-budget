/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import {rootReducer } from '../reducers/root.reducer';

import { AppComponent } from './app.component';

import { AddNodeComponent } from '../add-node/add-node.component';
import { AddNodeActions } from '../actions/add-node.actions';

import { InspectNodeComponent } from '../inspect-node/inspect-node.component';
import { InspectNodeActions } from '../actions/inspect-node.actions';

import { CalculatorComponent } from '../calculator/calculator.component';

import { VisRenderComponent } from '../vis-render/vis-render.component';
import { VisRenderActions } from '../actions/vis-render.actions';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { SwaggerClientFactory } from '../common/swagger.service';

// const mockRedux = {
//   dispatch(action) {},
//   configureStore() {},
//   select() {
//     return Observable.from('test');
//   }
// };

//NgRedux.instance = new NgRedux();


describe('AppComponent', () => {
 

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        NgReduxModule,
        ReactiveFormsModule,
        CustomFormsModule
      ],
      declarations: [
        AppComponent,
        AddNodeComponent,
        InspectNodeComponent,
        VisRenderComponent,
        CalculatorComponent
      ],
      providers: [
        AddNodeActions,
        VisRenderActions,
        InspectNodeActions,
        NgRedux
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app with a variable', async(() => {

    let ngRedux = new NgRedux();
    ngRedux.configureStore(
      rootReducer, {}, [   ]
    );
    TestBed.
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    //console.log('xxx',app.testVar);
    expect(app.testVar).toBe(42);
  }));

  // it('should create the store', (done) => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   //console.log('ngRedux',app.ngRedux);
  //   //NgRedux.instance = app.ngRedux;
  //   //console.log('ngRedux',app.ngRedux.getState());
  //   //console.log('state',app.ngRedux.getState());
  // });

});
