import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
@NgModule({
    imports: [

    ]

})


@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: './login.component.html'
      
})
export class LoginComponent {
    loginForm: FormGroup;
    userEmailValidation: FormControl;
    userPasswordValidation: FormControl;
    notValidUser: boolean = true;
    

    constructor(private router:Router) {
         
        this.createFormControls();
        this.createForm();
    }

    createFormControls = () => {
        this.userEmailValidation = new FormControl('', [Validators.required, Validators.email]);
        this.userPasswordValidation = new FormControl('', [Validators.required]);
    }

    createForm = () => {
        this.loginForm = new FormGroup({
            userEmailValidation: this.userEmailValidation,
            userPasswordValidation: this.userPasswordValidation
        });
    }


    onLogin = (event: Object) => {
        if (this.userEmailValidation.value == "a@a.com" && this.userPasswordValidation.value == "a") {
            alert('successfull!');
            this.router.navigate(['/allTasks'])
        } else {

            alert('invalid password');
            this.notValidUser = false;
        }
    }

    onEmailFocus = (e: Event) => {
         this.notValidUser = true;
         
    }

    onPasswordFocus=(e:Event)=>{
         this.notValidUser = true;
    }

    log = (x: object) => {
        console.log(x);
    }

}