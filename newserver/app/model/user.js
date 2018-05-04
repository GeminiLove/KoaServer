/* 此处设置User的model */

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        userName: { type: String },
        passWord: { type: String },
        type: { type: String, default: null },
        userAvatar: { type: String },
        userAge: { type: Number },
        /* 作为职位发布者: 公司名称、公司描述 */
        company_title: { type: String },
        company_desc: { type: String },
        /* 作为求职者: 个人描述, 期望岗位 */
        person_desc: { type: String },
        job_desc: { type:String },
        money: { type: Number },
    });

    return mongoose.model('User', UserSchema);
}
