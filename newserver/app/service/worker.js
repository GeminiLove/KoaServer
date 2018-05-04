'use strict';

module.exports = app => {
    class WorkerService extends app.Service {
        async createWorker(workerInfo) {
            console.log('进入创建工作的service, 传递过来的参数 = ', workerInfo);
            const { request, response, model } = this.ctx;
            const result = await model
                .Worker({...workerInfo})
                .save();
            if (result) {
                return true;
            } else {
                return false;
            }
        }

        async showPageWorker(workerInfo) {
            console.log('进入分页查询的模块');
        }

        async showWorkerListByUser(workerInfo) {
            console.log('进入根据用户信息查找的用户列表的service');
            const { model } = this.ctx;
            const result = await model
                .Worker
                .find(workerInfo);
            return result;
        }

        async showWorkerByIdMyself(workerInfo) {
            console.log('根据发布人信息查询自己发布的职位');
            const { model } = this.ctx;
            const result = await model
                .Worker
                .find({ userId: wrkerInfo.userId });
            return result;
        }

    }
    return WorkerService;
}