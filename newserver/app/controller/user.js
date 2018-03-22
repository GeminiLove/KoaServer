'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login () {
        console.log('进入用户登录模块');
        const {username, password} = this.ctx.request.body;
        console.log('获取登录模块的必要信息， userName = ',username, '  passWord = ',password);
        if(!username || !password) {
            this.ctx.response.body = "传递信息为空";
        } else {
            this.ctx.response.body = "可以通过";
        }
    }

    async register() {
        console.log('进入用户注册的模块');
        const { request, response, service } = this.ctx;
        // const { userName, passWord } = request.body;
        const { userName, passWord } = request.query;
        console.log('获取的用户userName = ', userName, '获取的用户密码 = ', passWord);
        const result = service.user.createUser({ userName, passWord });
    }

    async show () {
        console.log('进入用户显示模块');
        const { request, response, service } = this.ctx;
        const userId = request.query.userId;
        const result = await service.user.show(userId);
        console.log('获取的用户id = ', userId);
        console.log('获取的result = ', result);
    }

    async showAll () {
        console.log('查询数据库中的数据');
        this.ctx.response.body = this.ctx.service.user.showAll();
    }

    async update () {
        console.log('进入用户信息模块');
    }
}

module.exports = UserController;