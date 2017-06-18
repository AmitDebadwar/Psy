"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskListService = (function () {
    function TaskListService() {
    }
    TaskListService.prototype.getAllTasks = function () {
        return [{ "title": "Transfer money to aai account!", isDone: false }, { "title": "Attend interview", isDone: false }];
    };
    return TaskListService;
}());
exports.TaskListService = TaskListService;
//# sourceMappingURL=tasklist.service.js.map