'use strict';

// had enabled by egg
// exports.static = true;

/* 此处使用了mongoose数据库连接插件，egg-mongoose */
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};



/* 此处使用了socket.io */
/*
exports.io = {
    enable: true,
    package: 'egg-socket.io',
};*/
