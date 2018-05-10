/**
 * 这个中间件的作用相当于一个filter，对于每一个packet进行预处理
 * 在生产环境中，通常用于对消息进行预处理，又或者对于消息进行加密
 * 解密操作。
 *
 */
module.exports = app => {
    return async (ctx, next) => {
        ctx.socket.emit('res', 'filter.js 进行了 packet的预先处理');
        console.log('packet 数据包的格式 = ', this.packet);
        await next();
    }
};
