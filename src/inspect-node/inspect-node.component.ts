import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { RandomNumberService } from '../common/random-number.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'inspect-node',
  templateUrl: './inspect-node.component.html',
})

export class InspectNodeComponent {

  private inspectNodeForm; 

  constructor(private ngRedux: NgRedux<any>) {

    this.inspectNodeForm = new FormGroup({
          id: new FormControl(),
          amount: new FormControl(),
          type: new FormControl(),
          conditions: new FormControl(),
          description: new FormGroup({
            for: new FormControl(),
            label: new FormControl(),
          })
        });

    this.ngRedux.select(['ui','viewNode']).subscribe(function(viewNode: any){
      let displayData = Object.assign({id: viewNode.id}, viewNode.data);
       this.inspectNodeForm.patchValue(displayData);
    }.bind(this));

  }
}

