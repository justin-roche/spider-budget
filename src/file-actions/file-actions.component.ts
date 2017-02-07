import { Component, Injectable } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'file-actions',
  templateUrl: './file-actions.component.html',
})

export class FileActionsComponent {

  private files=[];

  constructor(private ngRedux: NgRedux<any>) {
    console.log(this)
  }

  onChange(event) {
    this.files.push(event.srcElement.files);
    console.log(this.files);
  }

  collateFiles(){
        // This will save data to the el4fms from
        // the rest call: /docadmin-service/v1/uploadscanneddocument/{docType}
        // should result with a Response (JSON)
    //     let that = this;
    //     let docSet = this.dActions.getAllDocuments();
 
    //     that.headers.append['Content-Type'] = 'application/x-www-form-urlencoded';
    //     that.headers.append['Accept'] = 'application/json';
    //     for (let i = 0; i < docSet.length; i++) {
    //         let doc = docSet[i].document;
    //         let filename = doc.name;
    //         let raw = doc.data;
    //         let buff = new ArrayBuffer(raw.length);
    //         let bufView = new Uint8Array(buff);
    //         for (let j = 0; j < raw.length; j++) {
    //             bufView[j] = raw.charCodeAt(j);
    //         }
 
    //         if (!filename.match('.pdf')) {
    //             filename = filename.substr(0, filename.lastIndexOf('.')) + '.pdf';
    //         }
 
    //         that.payload = new FormData();
    //         that.payload.append('fileID', that.guid());
    //         that.payload.append('mimeType', 'pdf');
    //         that.payload.append('file',
    //                             new File( [buff],
    //                             filename,
    //                             { type: 'application/octet-stream' } )
    //         );
    //         that.payload.append('metadata', '[init:0]');
 
    //         that.type = 'post';
    //         that.RESTUrl = '/docadmin-services/v1/scandocs';
    //         return that.doRESTfulCall();
    // }


  }

  uploadFiles(){
    this.files = this.files.map(list=>list[0]);
    console.log('uploading', this.files);

    let formData: FormData = new FormData();
    let xhr: XMLHttpRequest = new XMLHttpRequest();

    for (let i = 0; i < this.files.length; i++) {
        formData.append(`file${i}`, this.files[i], this.files[i].name);
    }
    console.log(formData);

     xhr.open('POST', 'http://localhost:5002', true);
     xhr.send(formData);
  }

  testServer(){
    let formData: FormData = new FormData();
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    formData.append("a", 'b');
     xhr.open('POST', 'http://localhost:5002', true);
     xhr.send(formData);

  }
}

