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
var tabs_1 = require("../../commonComponents/tabs");
var tab_1 = require("../../commonComponents/tab");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var platform_browser_1 = require("@angular/platform-browser");
var symtom_model_1 = require("../../Model/symtom.model");
var NewPatientCreationComponent = (function () {
    function NewPatientCreationComponent(sanitized) {
        var _this = this;
        this.sanitized = sanitized;
        this.allSymptoms = [];
        this.symptoms = [];
        this.symptomsDisplay = "";
        this.isShowEditor = false;
        this.getEditorContent = function (smtms) {
            _this.ckeditorContent = "\n      <div data-tagInfo=\"bodyTag\" style=\"padding:0px 15px;border:1px solid lightgray;\">\n        <h1 style=\"text-align:center\"><span style=\"color:#696969\"><strong>Sankalp Hospital</strong></span></h1>\n        <div data-tagInfo=\"headerRow\" style=\"display:flex;justify-content: space-between\">\n            <div data-tagInfo=\"leftHeader\" style=\"text-align:left;float:left;width:50%;\">\n                <div>\n                    <p>Dr. Niket Kasart<br /> MBBS MD (Mumbai)<br /> Email: niket.kasar@gmail.com<br /> Contact: 9985457854/9854525458</p>\n                </div>\n            </div>\n            <div data-tagInfo=\"rightHeader\" style=\"text-align:right;float:right;width:50%;\">\n\n                <table align=\"right\">\n                    <tbody>\n                        <tr>\n                            <th style=\"text-align:right;\">Patient Name:</th>\n                            <td style=\"text-align:left;\">Amit Kumar Arora</td>\n                        </tr>\n\n                        <tr>\n                            <th style=\"text-align: right\">Date:</th>\n                            <td style=\"text-align:left;\">31 March, 2017</td>\n                        </tr>\n\n\n                    </tbody>\n\n                </table>\n\n            </div>\n        </div>\n        <hr style=\"border-color:darkgray\" />\n\n        <div data-tagInfo=\"middleBodyPart\" style=\"word-break: keep-all;\">\n            <p>\n                <b>Mr Amit Kumar</b> This is one of the simpler, no-frills text generators based only on Lorem Ipsum. You\n                basically are only able to adjust the amount of paragraphs or words. You can also create bulleted lists or\n                generate your text based on how many bytes it should be. A nice addition here, is that it offers you some\n                background information on the use and history of \u2018Lorem Ipsum.\u2019 This is one of the simpler, no-frills text\n                generators based only on Lorem Ipsum. You basically are only able to adjust the amount of paragraphs or words.\n                You can also create bulleted lists or generate your text based on how many bytes it should be. A nice addition\n                here, is that it offers you some background information on the use and history of \u2018Lorem Ipsum.\u2019\n            </p>\n            <p>\n               <strong> He has been found with following symtoms: " + smtms + "</strong>\n            </p>\n            <p>\n                This is one of the simpler, no-frills text generators based only on Lorem Ipsum. You basically are only able to adjust the\n                amount of paragraphs or words. You can also create bulleted lists or generate your text based on how many\n                bytes it should be. A nice addition here, is that it offers you some background information on the use and\n                history of \u2018Lorem Ipsum.\u2019 This is one of the simpler, no-frills text generators based only on Lorem Ipsum.\n                You basically are only able to adjust the amount of paragraphs or words. You can also create bulleted lists\n                or generate your text based on how many bytes it should be. A nice addition here, is that it offers you some\n                background information on the use and history of \u2018Lorem Ipsum.\u2019\n            </p>\n\n            <p>\n                This is one of the simpler, no-frills text generators based only on Lorem Ipsum. You basically are only able to adjust the\n                amount of paragraphs or words. You can also create bulleted lists or generate your text based on how many\n                bytes it should be. A nice addition here, is that it offers you some background information on the use and\n                history of \u2018Lorem Ipsum.\u2019 This is one of the simpler, no-frills text generators based only on Lorem Ipsum.\n                You basically are only able to adjust the amount of paragraphs or words. You can also create bulleted lists\n                or generate your text based on how many bytes it should be. A nice addition here, is that it offers you some\n                background information on the use and history of \u2018Lorem Ipsum.\u2019\n            </p>\n\n        </div>\n        <hr style=\"border-color:darkgray\" />\n\n        <div data-tagInfo=\"footer\" style=\"margin:80px 10px 20px 10px;\">\n            <div data-tagInfo=\"footerRow\" style=\"display:flex;justify-content: space-between\">\n                <div data-tagInfo=\"leftFooter\" style=\"float:left;width:50%;\">\n                    <b>Patient's Signature</b>\n                </div>\n\n                <div data-tagInfo=\"rightFooter\" style=\"float:right\">\n                    <b>Doctors Signature</b>\n                </div>\n            </div>\n        </div>\n    </div data-tagInfo=\"bodyTagClosed\">\n \n ";
            return _this.ckeditorContent;
        };
        this.preview = function () {
            _this.previewContent = _this.sanitized.bypassSecurityTrustHtml(_this.ckeditorContent);
            _this.isShowEditor = false;
        };
        this.showEditorCk = function () {
            _this.isShowEditor = true;
        };
        this.addSymptons = function (sym) {
            if (!sym.isSelected) {
                _this.symptoms = _this.symptoms.filter(function (item) { return item.name !== sym.name; });
            }
            else {
                _this.symptoms.push(sym);
            }
            _this.symptomsDisplay = _this.symptoms.map(function (element) {
                return element.name;
            }).join(", ");
            _this.getEditorContent(_this.symptomsDisplay);
            _this.previewContent = _this.sanitized.bypassSecurityTrustHtml(_this.ckeditorContent);
        };
        var s1 = new symtom_model_1.SymptomModel();
        s1.name = "Insomnia";
        s1.isSelected = false;
        var s2 = new symtom_model_1.SymptomModel();
        s2.name = "Fear";
        s2.isSelected = false;
        var s3 = new symtom_model_1.SymptomModel();
        s3.name = "Sucidal Thoughts";
        s3.isSelected = false;
        var s4 = new symtom_model_1.SymptomModel();
        s4.name = "Over thinking";
        s4.isSelected = false;
        this.allSymptoms.push(s1);
        this.allSymptoms.push(s2);
        this.allSymptoms.push(s3);
        this.allSymptoms.push(s4);
        this.getEditorContent("");
        this.previewContent = this.sanitized.bypassSecurityTrustHtml(this.ckeditorContent);
    }
    return NewPatientCreationComponent;
}());
NewPatientCreationComponent = __decorate([
    core_1.Component({
        selector: 'new-patient-creation',
        templateUrl: './newpatientcreation.component.html'
    }),
    core_1.Pipe({ name: 'safeHtml' }),
    core_1.NgModule({
        imports: [ng2_ckeditor_1.CKEditorModule, forms_1.FormsModule],
        declarations: [tabs_1.Tabs, tab_1.Tab]
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], NewPatientCreationComponent);
exports.NewPatientCreationComponent = NewPatientCreationComponent;
//# sourceMappingURL=newpatientcreation.component.js.map