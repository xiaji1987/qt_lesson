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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_ts_controllers_1 = require("koa-ts-controllers");
const flow_1 = require("../flow/flow");
let Main = class Main {
    async hello() {
        return 'okay';
    }
    async state(state) {
        return state;
    }
    async body(body) {
        return body;
    }
};
__decorate([
    koa_ts_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Main.prototype, "hello", null);
__decorate([
    koa_ts_controllers_1.Flow(flow_1.setSomethingStateFlow),
    koa_ts_controllers_1.Get('/state'),
    koa_ts_controllers_1.Version('1'),
    __param(0, koa_ts_controllers_1.State()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Main.prototype, "state", null);
__decorate([
    koa_ts_controllers_1.Get('/body'),
    __param(0, koa_ts_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Main.prototype, "body", null);
Main = __decorate([
    koa_ts_controllers_1.Controller('/action')
], Main);
exports.Main = Main;
//# sourceMappingURL=main.js.map