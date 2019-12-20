"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSomethingStateFlow = async (ctx, next) => {
    console.log('state', ctx.state);
    ctx.state.something = 'state zhele';
    await next();
};
exports.getBody = async (ctx, next) => {
    console.log('body', ctx.body);
    ctx.state.something = '123';
    await next();
};
//# sourceMappingURL=flow.js.map