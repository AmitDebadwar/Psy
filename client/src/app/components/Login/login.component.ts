import { Component } from '@angular/core';
 

@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    loginForm={userEmail:'',userPassword:''};
  
   constructor() {}
  

   ngOninit=()=>{
    
   }

     onLogin=(event:Object) =>{
        alert(this.loginForm.userEmail +" "+this.loginForm.userPassword);
     }
    
     
     
}