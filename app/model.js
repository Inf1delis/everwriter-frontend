let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let messageSchema = new Schema({
        _id: Schema.ObjectId,
        id: String,
        timestamp: {
            type: Date,
            default: Date.now
        },
        ordinal: Number,
        title: String,
        text: String,
        style: {
            color: String
        },
        status: Number
    },
    { versionKey: false });

module.exports = mongoose.model('docs', messageSchema);