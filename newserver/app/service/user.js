'use strict';

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 设置登录账号的方法: loginUser
         * @param userInfo
         * @returns {Promise<*>}
         */
        async loginUser(userInfo) {
            console.log('进入用户登录的模块');
            const { model } = this.ctx;
            try{
                // const {userName, passWord} = userInfo;
                const findresult = await model
                    .User
                    .findOne(userInfo);
                return findresult['_doc'];
            } catch (error) {
                console.log('进入用户登录的模块， 出现了错误 error = ', error);
            }
        }

        /**
         * 设置创建用户的方法： create
         * @param request
         * @returns {Promise<*>}
         */
        async createUser(userInfo) {
            console.log('进入创建用户模块');
            try {
                const {userName, passWord} = userInfo;
                const showresult = await this.ctx.model
                    .User
                    .findOne({userName: userName});
                if (showresult) {
                    const createresult = await this.ctx.model
                        .User({userName: userName, passWord: passWord})
                        .save();
                    if(createresult){
                        return { status: 1, msg: '创建成功' };
                    } else {
                        return { status: 0, msg: '创建失败' };
                    }
                } else {
                    return {status: 0, msg: '用户名重复' };
                }
            } catch (error) {
                console.log('创建用户模块出现问题 = ', error);
            }
        }

        /**
         * 设置完善用户信息的方法: createUserInfo
         * @param userInfo
         * @returns {Promise<void>}
         */
        async createUserInfo(userInfo) {
            console.log('进入完善用户信息的service');
            try {
                const { model } = this.ctx;
                const showresult = await model.User.findOne({_id: userInfo._id});
                if (showresult) {
                    await model.User.findByIdAndUpdate({_id: userInfo._id}, userInfo);
                    const updateresult = await model.User.findOne({_id: userInfo._id});
                    return updateresult['_doc'];
                } else {
                    return null;
                }
            } catch (error) {
                console.log('完善用户信息的service出现了问题');
            }
        }

        /**
         * 设置用户名校验的方法:userCheckValue
         * @param userInfo
         * @returns {Promise<*>}
         */
        async userCheckValue(userInfo) {
            try{
                const { model } = this.ctx;
                const result = await model
                    .User
                    .findOne({...userInfo})
                return result;
            } catch(error) {
                console.log('user中Service下的checkValue出现错误');
            }
        }

        /**
         * 设置更新用户信息的方法： update
         * @param id
         * @param request
         * @returns {Promise<*>}
         */
        async updateUser(userInfo, newuserInfo) {
            /* let result = await this.ctx.model
                 .User
                 .findOneAndUpdate({'_id': Object(id)},{$set: request});
             return result;*/
            console.log('进入更新用户信息模块');
            const {model} = this.ctx.model;
            try {
                const result = await model
                    .User
                    .findOneAndUpdate({'id': userInfo.id}, {$set: newuserInfo});
            } catch (error) {
                console.log('用户信息更新模块出现问题, error = ', error);
            }
        }

        /**
         * 设置显示信息的方法，在现有阶段，方便进行测试使用 ： show
         * @param id
         * @returns {Promise<*>}
         */
        async showUser({id}) {
            const userInfo = await this.ctx.model
                .User
                .find({'id': id});
            return userInfo;
        }

        /**
         * 测试用方法： 用来进行数据库数据查看
         */
        async showAll() {
            const {model} = this.ctx;
            try {
                const result = await model
                    .User
                    .find({userName: '林麟'});
                console.log('showAll的result = ', result);
                return result;
            } catch (error) {
                console.log('showAll的UserInfo的service出现问题, error = ', error);
            }
        }

    }

    //将UserService模块进行暴露
    return UserService;
}