import { Component, NgModule } from '@angular/core';

import {Tabs} from '../../commonComponents/tabs';
import { Tab } from '../../commonComponents/tab';

import { CKEditorModule } from '../../../../node_modules/ng2-ckeditor';

@Component({
    selector:'new-patient-creation',
    templateUrl:'./newpatientcreation.component.html'
})


@NgModule({
  imports: [CKEditorModule],
  declarations: [Tabs, Tab ]
   
})
export class NewPatientCreationComponent{
 
}