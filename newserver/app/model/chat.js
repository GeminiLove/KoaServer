module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ChatSchema = new Schema({
        chatid: { type: String, require: true },
        from: { type: String, ref: 'User', require: true },
        to: { type: String, ref: 'User', require: true },
        read: { type:String, default: false },
        content: { type:String, require: true, default: '' },
        createTime: { type: String, default: new Date().getTime()}
    })
    
    return mongoose.model('Chat', ChatSchema);
}