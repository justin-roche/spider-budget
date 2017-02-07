import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { AddNodeActions } from '../actions/add-node.actions';
import { RandomNumberService } from '../common/random-number.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'add-node',
  templateUrl: './add-node.component.html',
})

export class AddNodeComponent {

  private addNodeForm;
  private nodeTypes = ['credit', 'debit'];
  private conditionsArr = ['saved x', 'income x', 'credit x'];
  private periods = ['week','month','year'];

  constructor(public actions: AddNodeActions,private ngRedux: NgRedux<any>) {
    this.addNodeForm = new FormGroup({
      label: new FormControl('',[Validators.required]),
      parentNodes: new FormControl(''),
      amount: new FormControl('',[Validators.required, CustomValidators.number]),
      nodetype: new FormControl(this.nodeTypes[0]),
      conditions: new FormControl(),
      frequency: new FormControl(1,[Validators.required, CustomValidators.number]),
      period: new FormControl(this.periods[0]),
      description: new FormGroup({
      })
    });
    }

  save(form){
    this.ngRedux.dispatch({type: 'ADD-NODE', payload: form.value});
  }
}

