'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

    /* 放入测试数据 */
    *pushtestinfo (){
        yield this.ctx.model.User.save({userName: '林麟', passWord: '123'});
        console.log('存放数据成功');
    }

    *index() {
        console.log('进入testUser');
         this.pushtestinfo;
         this.ctx.body =  this.ctx.model.User.findOne({userName: '林麟'}, (error, doc) => {
             if (error) {
                 console.log('查无此数据');
                 return '查无此数据';
             } else {
                 console.log('查到了数据');
                 return doc;
             }
         });
        //this.ctx.body = 'Fuck test page';
    }
}

module.exports = TestController;
