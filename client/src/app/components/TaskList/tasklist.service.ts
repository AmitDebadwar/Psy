
import {Http} from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
imports:[Http]
})
export class TaskListService{

    constructor(private _http:Http){

    }

    getAllTasks():object[]{
        return [{"title":"Transfer money to aai account!",isDone:false},{"title":"Attend interview",isDone:false}];
    }

    searchPatients=(searchPatient:string):void=>{
        let p=new Promise((resolve,reject)=>{
            this._http.get("api/patients/?q=${searchPatient}").subscribe(r=>{
                console.log("saibaba1");
                console.log(r);
            });
        });
    }
}