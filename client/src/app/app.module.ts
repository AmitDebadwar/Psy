import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { TaskListComponent } from './components/TaskList/tasklist.component';
import { LoginComponent } from './components/Login/login.component';
import { NewPatientCreationComponent } from './components/NewPatientCreation/newpatientcreation.component';

import { EditorComponent } from './components/editor/editor.component';


import { Tabs } from './commonComponents/tabs';
import { Tab } from './commonComponents/tab';
import { CKEditorModule } from 'ng2-ckeditor';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'allTasks', component: TaskListComponent },
  { path: 'newPatientCreation', component: NewPatientCreationComponent },
  { path: 'editor', component: EditorComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule, CKEditorModule
  ],
  declarations: [AppComponent, HeaderComponent, LoginComponent, TaskListComponent, NewPatientCreationComponent, Tabs, Tab, EditorComponent],
  bootstrap: [AppComponent]
})



export class AppModule {
  ckeditorContent = `<b>saibaba</b>`;
}
