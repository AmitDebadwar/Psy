import { RouterModule, Routes }        from '@angular/router'; 
import { NgModule }                    from '@angular/core';
import { BrowserModule }               from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }                from './app.component';
import { HeaderComponent}              from './components/Header/header.component';
import { TaskListComponent }           from './components/TaskList/tasklist.component';
import { LoginComponent }              from './components/Login/login.component';
import { NewPatientCreationComponent } from './components/NewPatientCreation/newpatientcreation.component';

 const appRoutes:Routes=[
   {path:'login', component:LoginComponent},
   {path:'allTasks', component: TaskListComponent},
   {path:'newPatientCreation', component: NewPatientCreationComponent},
   {path:'**', component:LoginComponent}
 ];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes),
  FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent, HeaderComponent, LoginComponent, TaskListComponent, NewPatientCreationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
