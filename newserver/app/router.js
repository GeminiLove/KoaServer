'use strict';
//const userRouter = require('./router/user');
//console.log('后台外挂的userRouter = ', userRouter);

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller, io} = app;
    router.get('/', controller.home.index);
    router.post('/user/login', controller.user.login);
    router.get('/user/userCheckValue', controller.user.userCheckValue);
    router.post('/user/register', controller.user.register);
    router.post('/user/createUserInfo', controller.user.createUserInfo);
    router.get('/user/showInfo', controller.user.show);
    router.get('/user/showUserAll', controller.user.showAll);

    /* 这里是进行招聘职位发布的相关路由 */
    router.post('/worker/createWorkerInfo', controller.worker.createWorkerInfo);
    router.get('/worker/showWorkerListByUser', controller.worker.showWorkerListByUser);
    router.post('/worker/showWorkerListIndex', controller.worker.showWorkerListIndex);

    /* 这里是进行chat聊天功能的相关设置 */
    //这里的写法跟上面的处理方式不同：代表和对于/chat事件交给app/io/controller/chat进行统一处理
    io.of('/').route('chat', app.io.controller.chat)
};
