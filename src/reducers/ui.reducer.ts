//statepath: .ui

let defaultUi = {
  testToggle: false,
  viewNode: {
    data: {},
    id: 0,
    label: 'default',
  },
  showViewNode: false,
  addNode: {

  },
  showAddNode: false,
};

let keys = {
  'VIEW-INSPECT-NODE': viewInspectNode,
  'VIEW-ADD-NODE': viewAddNode,
}

function viewInspectNode(state,action){
  let viewNode = action._state.graph.selectNode(action.payload);
  return Object.assign({},state, {viewNode: viewNode, showViewNode: true});
}

function viewAddNode(state,action){
  return Object.assign({},state,{addNode: {parents: [action.payload.id]}, showAddNode: true});
}

export function uiReducer(ui = defaultUi, action) {
  if(keys[action.type]){
    return keys[action.type](ui, action);
  } else {
    return ui;
  }
}