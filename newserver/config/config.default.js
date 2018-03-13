'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1520958987802_3294';

    // add your config here
    config.middleware = [];

    return config;
};

exports.mongoose = {
    url: 'mongodb://127.0.0.1:27017/example',
    options: {},
}

/*
exports.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1/example',
        options: {},
    },
};*/
