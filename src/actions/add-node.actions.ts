import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class AddNodeActions {
  constructor (private ngRedux: NgRedux<any>) {}

  addNode(): void { }

}
