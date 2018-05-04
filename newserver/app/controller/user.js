'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login () {
        console.log('进入用户登录模块');
        const { request, response, service } = this.ctx;
        try {
            const {username, password} = request.body;
            console.log('获取登录模块的必要信息， userName = ',username, '  passWord = ',password);
            const result = await service.user.loginUser({ userName: username, passWord: password });
            console.log('登录的结果 = ', result);
            if(!result) {
                console.log('登录失败');
                // response.status = 402;
                response.body = {mystatus: 0, msg: '用户名或者密码错误'};
            } else {
                console.log("登录成功");
                // response.status = 200;
                response.body = {mystatus: 1, msg: '登录成功', userInfo: {...result, id: result['_id']}};
            }
        } catch (error) {
            console.log('userLogin模块出现问题, error = ', error);
        }
    }

    async register() {
        console.log('进入用户注册的模块');
        const { request, response, service } = this.ctx;
        const { username, password } = request.body;
        console.log('获取的用户userName = ', username, '获取的用户密码 = ', password);
        const result = await service.user.createUser({ userName: username, passWord: password });
        if (result.status === 1) {
            response.body = {mystatus: 1, msg: '创建成功'};
        } else {
            response.body = {mystatus: 0, msg: '创建失败'};
        }
    }

    async createUserInfo() {
        console.log('进入完善用户信息的模块');
        const { request, response, service } = this.ctx;
        console.log('进入完善用户信息的界面，获取的request = ', request.body);
        const { id, ...params } = request.body;
        console.log('获取的id = ', id, '  , 获取的其他属性 params = ', params);
        const result = await service.user.createUserInfo({...params, _id: id});
        console.log('更新用户信息的最终结果 = ', result);
        if (result) {
            console.log('userInfo = ',  {...result, id: result['_id']});
            response.body = { mystatus: 1, msg: '更新用户成功', userInfo: {...result, id: result['_id']} };
        } else {
            response.body = { mystatus: 0, msg: '更新用户失败' };
        }
    }

    async userCheckValue(){
        console.log('进入登录模块的校验操作CheckValue');
        const { request, response, service } = this.ctx;
        try{
            const {username} = request.query;
            console.log('从request请求中拿到的username = ', username);
            const result = await service
                .user
                .userCheckValue({userName: username})
            console.log(' ===== 进行用户名校验的操作 = ', result);
            if (!result) {
                console.log('可以使用该用户名');
                return response.body = {mystatus: 1, msg: '可以使用该用户名'};
            } else {
                console.log('用户名重复');
                return response.body = {mystatus: 0, msg: '用户名重复'};
            }
        } catch(error) {
            console.log('user的Controller下checkValue出现错误, error = ', error);
        }
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
        this.ctx.response.body = await this.ctx.service.user.showAll();
    }

    async update () {
        console.log('进入用户信息模块');
    }
}

module.exports = UserController;