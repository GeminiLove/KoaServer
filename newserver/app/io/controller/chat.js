'use strict';

/**
 * 默认通过当前Controller进行消息的统一处理，
 * 这里我有基础问题，为什么不把消息处理统一放置在一个位置？是因为网络格式的问题吗?
 */
const Controller = require('egg').Controller;

class DefaultController extends Controller {
    async getMessageInfo() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        await ctx.socket.emit('res', `服务器端口接受到了数据 message = ${message}`);
    }
}

module.exports = DefaultController;


/*
//将接受的消息发送给客户端
module.exports = app => {
    return function* () {
        const self = this;
        const message = this.args[0];
        console.log('chat的控制器接受的message = ', message);
        this.socket.emit('res', `Oh, Dear, 我接收到了数据 ${message}`);
    };
};*/

