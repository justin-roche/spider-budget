const keys = {

}

function x(){

}

export function globalReducer(state: any, action:any) {
  if(keys[action.type]){
    return keys[action.type](state, action);
  } else {
    return state;
  }
}