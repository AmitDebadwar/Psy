import { Component } from '@angular/core';
import { MedicineModel } from '../../Model/MedicineModel';


 




@Component({
    selector:'addvisit',
    templateUrl:'./addvisit.component.html'
})
export class AddVisitComponent{

medicines:Array<MedicineModel>;
medicineList:Array<string>;
doseQuantities:Array<string>=['0','1','1/2','1/4'];



constructor(){
    this.medicines=new Array<MedicineModel>();
    this.medicineList=new Array<string>();

    this.medicineList.push("Olaset 5 Mg");
    this.medicineList.push("Opiprol");
    this.medicineList.push("Armong 150");
    this.medicineList.push("Zolcalm 10 mg");
    this.medicineList.push("Syconil 5");


}

addMedicine=()=>{
 

let m=new MedicineModel();
m.medicineName="Sai";
m.morning=true;
m.afternoon=true;
m.night=true;


this.medicines.push(m);

}


}


