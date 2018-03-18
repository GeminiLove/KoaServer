'use strict';

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 设置创建用户的方法： create
         * @param request
         * @returns {Promise<*>}
         */
        async create (request){
            let result = await this.ctx.model
                .User
                .create(request);
            return result;
        }

        /**
         * 设置更新用户信息的方法： update
         * @param id
         * @param request
         * @returns {Promise<*>}
         */
        async update (id, request) {
            let result = await this.ctx.model
                .User
                .findOneAndUpdate({'_id': Object(id)},{$set: request});
            return result;
        }

        /**
         * 设置显示信息的方法，在现有阶段，方便进行测试使用 ： show
         * @param id
         * @returns {Promise<*>}
         */
        async show (id) {
            let userInfo = await this.ctx.model
                .User
                .find({'id': Object(id)});
            return userInfo;
        }

    }
    //将UserService模块进行暴露
    return UserService;
}