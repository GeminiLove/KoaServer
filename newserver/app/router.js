'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/login', controller.user.login);
  router.get('/user/register', controller.user.register);
  router.get('/user/showInfo', controller.user.show);
  router.get('/user/showUserAll', controller.user.showAll)
  /*router.get('/test', controller.myTest.pushtestinfo);
  router.get('/getTestData', controller.myTest.getTestData);*/
};
