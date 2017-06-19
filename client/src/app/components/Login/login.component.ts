import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    loginForm: FormGroup;
    constructor() {
        this.loginForm = new FormGroup({
            userEmail: new FormControl('',[Validators.required,
            Validators.minLength(4),Validators.maxLength(7)]),

            userPassword:new FormControl('',[Validators.required])

        });

    }
    onLogin = (event: Object) => {
        alert('loging');
    }

   log = (x: object) => {
        console.log(x);
    }

}