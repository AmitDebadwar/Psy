import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Tabs} from '../../commonComponents/tabs';
import { Tab } from '../../commonComponents/tab';

//import { CKEditorModule } from '../../../../node_modules/ng2-ckeditor';
import { CKEditorModule } from 'ng2-ckeditor';
@Component({
    selector:'new-patient-creation',
    templateUrl:'./newpatientcreation.component.html'
})


@NgModule({
  imports: [CKEditorModule,FormsModule ],
  declarations: [Tabs, Tab ]
   
})
export class NewPatientCreationComponent{
 ckeditorContent='<h1 style="text-align: center;"><strong><span style="color:#0033cc">Form 16</span></strong></h1><hr /><p>&nbsp;</p>';
}