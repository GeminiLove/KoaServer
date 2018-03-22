'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = 'key';

    // add your config here
    config.middleware = [];

    config.security = {
        csrf: {
            ignoreJSON: true,
        },
        // 设置白名单
        domainWhiteList: ['http://localhost:9000'],
    };

    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
        credentials: true,
    }

    config.mongoose = {
        url: 'mongodb://127.0.0.1:27017/example',
        options: {},
    }

    return config;
};

exports.keys='key';
/**
 *这里需要特别注意一下，这里需要做相关的跨域设置
 */
/*module.exports = appInfo => {
    const config = {};

}*/

exports.mongoose = {
    url: 'mongodb://127.0.0.1:27017/example',
    options: {
    },
};

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
