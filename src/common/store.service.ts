import { Injectable } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import {rootReducer } from '../reducers/root.reducer';

@Injectable()
export class restService {

    constructor(private ngrx: NgRedux){
        this.swag.getSwaggerClients(()=>{
            console.log(this.swag);
         });
    }
    
}