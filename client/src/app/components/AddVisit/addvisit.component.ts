import { Component } from '@angular/core';
import { MedicineModel } from '../../Model/MedicineModel';







@Component({
    selector: 'addvisit',
    templateUrl: './addvisit.component.html'
})
export class AddVisitComponent {

    medicines: Array<MedicineModel>;
    medicineList: Array<string>;
    doseQuantities: Array<string> = ['0', '1', '1/2', '1/4'];
    isInEditMode:boolean=true;


    constructor() {
        this.medicines = new Array<MedicineModel>();
        this.medicineList = new Array<string>();

        this.medicineList.push("Olaset 5 Mg");
        this.medicineList.push("Opiprol");
        this.medicineList.push("Armong 150");
        this.medicineList.push("Zolcalm 10 mg");
        this.medicineList.push("Syconil 5");


    }

    drpMedicineChange = (value: any, model: any) => {
        model.medicineName = value;        
    }

    

    addMedicine = () => { this.medicines.push(new MedicineModel()); console.log(this.medicines); };
    prescriptionDone = () => this.isInEditMode=!this.isInEditMode;
}


