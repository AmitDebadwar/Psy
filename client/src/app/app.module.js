"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/Header/header.component");
var tasklist_component_1 = require("./components/TaskList/tasklist.component");
var login_component_1 = require("./components/Login/login.component");
var newpatientcreation_component_1 = require("./components/NewPatientCreation/newpatientcreation.component");
var tabs_1 = require("./commonComponents/tabs");
var tab_1 = require("./commonComponents/tab");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'allTasks', component: tasklist_component_1.TaskListComponent },
    { path: 'newPatientCreation', component: newpatientcreation_component_1.NewPatientCreationComponent },
    { path: '**', component: login_component_1.LoginComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule, forms_1.ReactiveFormsModule
        ],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, tasklist_component_1.TaskListComponent, newpatientcreation_component_1.NewPatientCreationComponent, tabs_1.Tabs, tab_1.Tab],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map