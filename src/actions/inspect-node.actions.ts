import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class InspectNodeActions {
  constructor (private ngRedux: NgRedux<any>) {}

  InspectNode(): void { }

}
