import { NgRedux } from 'ng2-redux';
import { uiReducer } from './ui.reducer';
import { combineReducers, applyMiddleware, createStore } from 'redux';

/*<------------------test Reducers------------------>*/
// let defaultReducerA = (state = 1, action) => state;
// let defaultReducerB = (state = 2, action) => state;
// let testReducer = function(state=null,action){
//     if(action.type === 'test'){
//         return action.payload;
//     }
//     else {
//         return state;
//     }
// }

// let combinedReducer = combineReducers({
//     sliceA: defaultReducerA,
//     sliceB: defaultReducerB,
//     test: testReducer,
// });

// let provideRedux = (state ={}, reducer = combinedReducer) => {
//   let store = createStore(combinedReducer,state);
//   return store;
// };

/*<------------------test Reducers------------------>*/

// describe('shape of state',()=>{
//     it('has a state observable', ()=>{
//         let store = provideRedux();
//         console.log(store.getState())
//         store.dispatch({type: 'test', payload: 3});
//         console.log(store.getState());
//     });
// });
