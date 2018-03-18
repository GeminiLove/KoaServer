'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

    /* 放入测试数据 */
    async pushtestinfo (){
        console.log('进入数据记录');
        const addData = new this.ctx.model.User({userName: '林麟', passWord: '123'});
        await addData.save();
        console.log('进入数据查询');
        const result = await this.ctx.model.User.findOne({
            userName: '林麟',
        });
        if (result) {
            this.ctx.body = result.toString();
        } else {
            this.ctx.body = '并没有找到此数据';
        }
    }

    async getTestData() {
        console.log('进入getTestData');
        console.log('进行request和response的设置');
        console.log('request携带的参数 = ', this.ctx.request.query.id);
        console.log('reqeust携带的参数 name = ', this.ctx.request.query.name);
    }
}

module.exports = TestController;
