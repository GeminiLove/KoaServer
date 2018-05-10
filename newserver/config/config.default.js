'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = 'key';

    // add your config here
    config.middleware = [];

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        // 设置白名单
        domainWhiteList: ['http://localhost:9000', 'http://localhost:8081',
            'http://192.168.5.2:5555', 'http://192.168.5.101:5555'],
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
        credentials: true,
    };

    config.mongoose = {
        url: 'mongodb://39.106.161.15:27017/praiticereact',
        options: {
            user: 'pr_linlin',
            pass: 'wojiaolinda',
        },
    };

    config.io = {
        namespace: {
            '/': {
                connectionMiddleware: ['auth'],
                packetMiddleware: ['filter'],
            }
        }
    };

    return config;
};

exports.keys='key';
/**
 *这里需要特别注意一下，这里需要做相关的跨域设置
 */

exports.io = {
    init: { }, // passed to engine.io
    namespace: {
        '/': {
            connectionMiddleware: [],
            packetMiddleware: [],
        },
    },
    redis: {
        host: '127.0.0.1',
        port: 6379
    }
};


/*
exports.development = {
    reloadPattern: ['**'],
};*/
