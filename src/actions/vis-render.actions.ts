import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class VisRenderActions {
  constructor (private ngRedux: NgRedux<any>) {}
  render(): void {
  }
}
