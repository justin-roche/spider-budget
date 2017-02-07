import { Injectable } from '@angular/core';
import { SwaggerClientFactory } from './swagger.service';

@Injectable()
export class restService {

    constructor(private swag: SwaggerClientFactory){
        this.swag.getSwaggerClients(()=>{
            console.log(this.swag);
         });
    }
    
}
