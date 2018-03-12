const Koa = require('koa');

const app = new Koa();

app.use( async (ctx, next) => {
    ctx.body = 'Hello Koa2';
})


/* 启动使用nodemon server/index.js 进行启动 */
app.listen(9000);