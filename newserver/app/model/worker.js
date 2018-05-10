/* 此处设置User的model */

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const WorkerSchema = new Schema({
        userId: {
            type: String,
            ref: 'User',
        },
        seek_title: { type: String },
        seek_content: { type: String, default: null },
        money: { type: Array, default: [0,0] },
        worker_tags: { type: Array, default: [] },
        worker_education: { type: String, default: '' },
        worker_experision: { type: String, default: '' },
        publish_time: { type: Number, default: new Date().getTime() }
    });

    return mongoose.model('Worker', WorkerSchema);
}
