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

    async show () {
        console.log('进入用户显示模块');
    }

    async register () {
        console.log('进入用户申请模块');
    }

    async update () {
        console.log('进入用户信息更细模块');
    }
}

module.exports = UserController;