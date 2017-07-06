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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var TaskListService = (function () {
    function TaskListService(_http) {
        var _this = this;
        this._http = _http;
        this.searchPatients = function (searchPatient) {
            var p = new Promise(function (resolve, reject) {
                _this._http.get("api/patients/?q=${searchPatient}").subscribe(function (r) {
                    console.log("saibaba1");
                    console.log(r);
                });
            });
        };
    }
    TaskListService.prototype.getAllTasks = function () {
        return [{ "title": "Transfer money to aai account!", isDone: false }, { "title": "Attend interview", isDone: false }];
    };
    return TaskListService;
}());
TaskListService = __decorate([
    core_1.NgModule({
        imports: [http_1.Http]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], TaskListService);
exports.TaskListService = TaskListService;
//# sourceMappingURL=tasklist.service.js.map