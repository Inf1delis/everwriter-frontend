let mongoose = require('mongoose');
let Docs = require('./model');

exports.insertDoc = (id, title, text, style) => Docs.create(
    {
        _id: new mongoose.Types.ObjectId,
        id: id,
        title: title,
        text: text,
        style: {
            color: style.color
        },
        likes: 0,
        deleted: false
    });

exports.getDocs = () => Docs.find({deleted: false}).sort('+timestamp');

exports.getDocsAfterDate = (date) => Docs.find({timestamp: {$gt: date}}).sort('+timestamp');

exports.updateDoc = (id, title, text, likes, style) => Docs.findOneAndUpdate({_id: id},
    {
        $set: {
            title: title,
            text: text,
            likes: likes,
            style: {
                color: style.color
            }
        },
        $currentDate: {
            timestamp: true, $type: "date"
        }
    }, {new: true});

exports.deleteDoc = (id) => Docs.findOneAndUpdate({_id: id}, {$set:{deleted: true}, $currentDate: {timestamp: true, $type: "date"}}, {new: true});