import { combineReducers, applyMiddleware } from 'redux';
import { graphReducer } from './graph.reducer';
import { uiReducer } from './ui.reducer';
import { calcReducer } from './calc.reducer';
import { globalReducer } from './global.reducer';

const subReducers= combineReducers({
  graph: graphReducer,
  ui: uiReducer,
  calc: calcReducer,
  test: testReducer,
});

function testReducer(currentState = false,action:any){
  if(action.type === 'TEST'){
      return true;
  }
  return currentState;
}

export function rootReducer(currentState:any={}, action:any) {
  let nextState = globalReducer(currentState, action);
  return subReducers(nextState, action);
}

// const persistState = require('redux-localstorage');

// export const enhancers = [
//   persistState('counter', { key: 'ng2-redux/examples/counter' })
// ];

