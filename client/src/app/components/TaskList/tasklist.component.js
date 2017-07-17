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
var tasklist_service_1 = require("./tasklist.service");
var TaskListComponent = (function () {
    function TaskListComponent(taskListService) {
        var _this = this;
        this.taskListService = taskListService;
        this.matchedPatients = ['A', 'B', 'C'];
        this.isSearchSectionVisible = false;
        this.searchPatients = function () {
            _this.isSearchSectionVisible = true;
            _this.taskListService.searchPatients(_this.searchPatient);
        };
        this.tasks = taskListService.getAllTasks();
    }
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'tasklist',
        templateUrl: './tasklist.component.html',
        providers: [tasklist_service_1.TaskListService]
    }),
    __metadata("design:paramtypes", [tasklist_service_1.TaskListService])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=tasklist.component.js.map