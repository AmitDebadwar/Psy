import { Component } from '@angular/core'


@Component({
 templateUrl:'./visitlist.component.html',
 selector:'visitlist'

})
export class VisitListComponent{

    getAllVisitOfPatient=(): string[]=>{
        return ['sai','sai2'];
    }
}