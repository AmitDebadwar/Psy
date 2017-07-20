import { Component, NgModule} from '@angular/core';
import { MedicineModel } from '../../Model/MedicineModel';

import { Typeahead } from 'ng2-typeahead';




@NgModule({
   declarations: [ Typeahead ],
})
@Component({
    selector: 'addvisit',
    templateUrl: './addvisit.component.html',
     styles: [`
        .typeahead{
            background-color:green;
        }
    `]
})
export class AddVisitComponent {

    medicines: Array<MedicineModel>;
    medicineList: Array<string>;
    doseQuantities: Array<string> = ['0', '1', '1/2', '1/4'];
    isInEditMode:boolean=true;

     fruits: any[] = [
    {
      id: 1,
      name: "Syconil",
      searchText: "syconil"
    },
    {
      id: 2,
      name: "Olaset 5",
      searchText: "olaset 5"
    },
    {
      id: 3,
      name: "Olaset 2.5",
      searchText: "olaset 2.5"
    },
    {
      id: 4,
      name: "Olaset 7",
      searchText: "olaset 7"
    },
    {
      id: 5,
      name: "Armond 150",
      searchText: "armond 150"
    },
    {
      id: 6,
      name: "Armond 75",
      searchText: "armond 75"
    }
  ];

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

    fruitSelected=(e:any)=>{
        console.log(e);
    }
}


