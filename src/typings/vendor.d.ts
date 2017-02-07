interface Vis {
    DataSet: any,
    Network: any,
}

declare var vis: Vis;

interface IAppState {
  graph?: Graph;
  viewNode?: Object;
}

interface Graph { 
    nodes: Array<Object>,
    edges: Array<Object>,
}