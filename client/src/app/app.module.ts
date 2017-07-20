import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Typeahead } from 'ng2-typeahead';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { TaskListComponent } from './components/TaskList/tasklist.component';
import { LoginComponent } from './components/Login/login.component';
import { NewPatientCreationComponent } from './components/NewPatientCreation/newpatientcreation.component';
import { VisitListComponent } from './components/VisitList/VisitList.component';
import { EditorComponent } from './components/editor/editor.component';
import { VisitDetailsComponent } from './components/VisitDetails/visitdetails.component';
import { AddVisitComponent } from './components/AddVisit/addvisit.component';

import { Tabs } from './commonComponents/tabs';
import { Tab } from './commonComponents/tab';
import { CKEditorModule } from 'ng2-ckeditor';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'allTasks', component: TaskListComponent },
  { path: 'newPatientCreation', component: NewPatientCreationComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'visitlist', component: VisitListComponent },
  { path: 'visitdetails', component: VisitDetailsComponent },
    { path: 'addVisit', component: AddVisitComponent },

  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule, CKEditorModule, HttpModule
  ],
  declarations: [
    Typeahead ,
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TaskListComponent,
    NewPatientCreationComponent,
    Tabs,
    Tab, EditorComponent,
    VisitListComponent,
    VisitDetailsComponent,
    AddVisitComponent
  ],
  bootstrap: [AppComponent]
})



export class AppModule {
  ckeditorContent = `<b>saibaba</b>`;
}
