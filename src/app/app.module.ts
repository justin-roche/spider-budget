import { FileActionsComponent } from './../file-actions/file-actions.component';
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

const urlMap = {
  serviceA: '/serviceAPath',
  serviceB: '/serviceBPath',
};

export function fact() {
  return new SwaggerClientFactory(urlMap);
}

@NgModule({
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
    CalculatorComponent,
    FileActionsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    AddNodeActions,
    VisRenderActions,
    InspectNodeActions,
    // {
    //   provide: SwaggerClientFactory, 
    //   useFactory: fact
    // }
  ]
})
 
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private devTool: DevToolsExtension) {

    /*
        middleware that adds the entire state tree on each action 
        so that slice reducers can access cross-slice data
    */

    const stateInterceptor = store => next => action => {
      action._state = store.getState();
      return next(action);
    };

    ngRedux.configureStore(
      rootReducer, {}, [ stateInterceptor]// devTool.isEnabled() ? devTool.enhancer() : f => f]
    );
  }
}

