let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let messageSchema = new Schema({
        _id: Schema.ObjectId,
        id: String,
        timestamp: {
            type: Date,
            default: Date.now
        },
        title: String,
        text: String,
        style: {
            color: String
        },
        likes: Number,
        deleted: {
            type: Boolean,
            default: false
        }
    },
    { versionKey: false });

module.exports = mongoose.model('docs', messageSchema);