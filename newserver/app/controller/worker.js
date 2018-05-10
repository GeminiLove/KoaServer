'use strict';

const Controller = require('egg').Controller;

class WorkerController extends Controller {
    /**
     * 发布职位的Controller的样式
     * @returns {Promise<void>}
     */
    async createWorkerInfo() {
        const {request, response, service} = this.ctx;
        console.log('当前的post传递过来的数值, resquest.body = ', request.body);
        const {...params} = request.body;
        console.log('传递过来的具体参数 = ', params);
        const result = await service.worker.createWorker(params)
        if (result) {
            response.body = {mystatus: 1, msg: '创建成功'};
        } else {
            response.body = {mystatus: 0, msg: '创建失败'};
        }
    }

    /**
     * 展示自己发布职位的样式
     * @returns {Promise<void>}
     */
    async showWorkerByIdMyself() {
        const { request, response, service } = this.ctx;
        const { ...params } = request.body;
        console.log('当前post传递过来的参数 = ', params);
        const result = await service.worker.showWorkerByIdMyself(params);
        if (request) {
            response.body = { mystatus: 1, payload: result };
        } else {
            response.body = { mystatus: 0, msg: '查询的workerList查询失败' };
        }
    }

    async showWorkerListIndex () {
        const { request, response, service } = this.ctx;
        const { pageNumber } = request.body;
        console.log('------- 获取的pageNumber = ', pageNumber);
        const result = await service
            .worker
            .showWorkerListIndex(pageNumber);
        if (result) {
            response.body = { mystatus: 1, msg: '主页找到了工作列表', indexWorkerList: result};
        } else {
            response.body = { mystatus: 0, msg: '主页的工作列表实现失败' };
        }
    }

    async showWorkerListByUser() {
        console.log('进入根据用户信息进行显示最近十条发布的职位');
        const { request, response, service } = this.ctx;
        console.log('通过request的传递过来的参数 = ', request.query);
        const {userId} = request.query;
        const result = await service
            .worker
            .showWorkerListByUser({userId})
        console.log('result = ', result);
        if (result) {
            console.log('返回信息成功');
            response.body = { mystatus: 1,  msg: '找到了指定结果', myWorkerList: result};
        } else {
            console.log('返回信息失败')
            response.body = { mystatus: 0, msg: '没有指定的信息' };
        }
    }
}

module.exports = WorkerController;