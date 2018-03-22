'use strict';

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 设置创建用户的方法： create
         * @param request
         * @returns {Promise<*>}
         */
        async createUser (userInfo){
            console.log('进入创建用户模块');
            try {
                const {userName, passWord} = userInfo;
                const showresult = await this.ctx.model
                    .User
                    .findOne({userName: userName});
                const createresult = await this.ctx.model
                    .User({ userName: userName, passWord: passWord })
                    .save()
                console.log('showresult = ', showresult);
                console.log('createresult = ', createresult);
                return createresult;

            } catch (error) {
                console.log('创建用户模块出现问题 = ', error);
            }
        }

        /**
         * 设置更新用户信息的方法： update
         * @param id
         * @param request
         * @returns {Promise<*>}
         */
        async updateUser (userInfo, newuserInfo) {
           /* let result = await this.ctx.model
                .User
                .findOneAndUpdate({'_id': Object(id)},{$set: request});
            return result;*/
           console.log('进入更新用户信息模块');
           const { model } = this.ctx.model;
           try{
               const result = await model
                   .User
                   .findOneAndUpdate({'id': userInfo.id}, {$set: newuserInfo});
           } catch (error) {
               console.log('用户信息更新模块出现问题');
           }
        }

        /**
         * 设置显示信息的方法，在现有阶段，方便进行测试使用 ： show
         * @param id
         * @returns {Promise<*>}
         */
        async showUser (userInfo) {
            const userInfo = await this.ctx.model
                .User
                .find({'id': userInfo.id});
            return userInfo;
        }

        /**
         * 测试用方法： 用来进行数据库数据查看
         */
        async showAll () {
            const { model } = this.ctx;
            try{
                const allUserInfo = await model
                    .User
                    .findAll();
                return allUserInfo;
            } catch (error) {
                console.log('showAll的UserInfo的service出现问题');
            }
            return result;
        }

    }
    //将UserService模块进行暴露
    return UserService;
}