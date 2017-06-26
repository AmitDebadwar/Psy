"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tabs_1 = require("../../commonComponents/tabs");
var tab_1 = require("../../commonComponents/tab");
var ng2_ckeditor_1 = require("../../../../node_modules/ng2-ckeditor");
var NewPatientCreationComponent = (function () {
    function NewPatientCreationComponent() {
    }
    return NewPatientCreationComponent;
}());
NewPatientCreationComponent = __decorate([
    core_1.Component({
        selector: 'new-patient-creation',
        templateUrl: './newpatientcreation.component.html'
    }),
    core_1.NgModule({
        imports: [ng2_ckeditor_1.CKEditorModule],
        declarations: [tabs_1.Tabs, tab_1.Tab]
    })
], NewPatientCreationComponent);
exports.NewPatientCreationComponent = NewPatientCreationComponent;
//# sourceMappingURL=newpatientcreation.component.js.map