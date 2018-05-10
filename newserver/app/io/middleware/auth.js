module.exports = app => {
    return function* next() {
        this.socket.emit('res', 'connectedd!(啊哈哈哈，连上了)');
        yield* next;
        console.log('disconnection!(没错，又他妈的挂了)');
    }
};