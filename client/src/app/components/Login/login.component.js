"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        var _this = this;
        this.router = router;
        this.notValidUser = true;
        this.createFormControls = function () {
            _this.userEmailValidation = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
            _this.userPasswordValidation = new forms_1.FormControl('', [forms_1.Validators.required]);
        };
        this.createForm = function () {
            _this.loginForm = new forms_1.FormGroup({
                userEmailValidation: _this.userEmailValidation,
                userPasswordValidation: _this.userPasswordValidation
            });
        };
        this.onLogin = function (event) {
            if (_this.userEmailValidation.value == "a@a.com" && _this.userPasswordValidation.value == "a") {
                alert('successfull!');
                _this.router.navigate(['/allTasks']);
            }
            else {
                alert('invalid password');
                _this.notValidUser = false;
            }
        };
        this.onEmailFocus = function (e) {
            _this.notValidUser = true;
        };
        this.onPasswordFocus = function (e) {
            _this.notValidUser = true;
        };
        this.log = function (x) {
            console.log(x);
        };
        this.createFormControls();
        this.createForm();
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_2.NgModule({
        imports: []
    }),
    core_1.Component({
        moduleId: module.id,
        selector: 'login-component',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a;
//# sourceMappingURL=login.component.js.map