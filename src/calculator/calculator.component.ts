import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
})

export class CalculatorComponent {

  @select('calc') calc$;

  constructor(private rdx: NgRedux<any>) {

  }

  timeChange(){

    console.log('changing')
  }

}

