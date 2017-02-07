

const keys = {
  'SET-TIME': setTime,
}

function setTime(calc, action){
  return Object.assign({}, calc, {time: action.payload})
}

export function calcReducer(calc: any={time: 0}, action:any) {
  if(keys[action.type]){
    return keys[action.type](calc, action);
  } else {
    return calc;
  }
}