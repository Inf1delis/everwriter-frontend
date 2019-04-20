let mongoose = require('mongoose');
let Docs = require('./model');

const newOrdinal = async () => {
    let max = await Docs.findOne({}, {
        _id: 0,
        timestamp: 0,
        title: 0,
        text: 0,
        status: 0,
        style: 0
    }).sort({ordinal: -1});
    let newOrdinal = Number(max.ordinal) + 1;
    return newOrdinal;
};

exports.insertDoc = async (id, title, text, style) => Docs.create(
    {
        _id: new mongoose.Types.ObjectId,
        id: id,
        ordinal: await newOrdinal(),
        title: title,
        text: text,
        style: {
            color: style.color
        },
        status: 0
    });

exports.getDocs = () => Docs.find({});

exports.getDocsAfterDate = (date) => Docs.find({timestamp: {$gt: date}});

exports.updateDoc = (id, title, text, style) => Docs.findOneAndUpdate({_id: id},
    {
        $set: {
            title: title,
            text: text,
            style: {
                color: style.color
            }
        },
        $currentDate: {
            timestamp: true, $type: "date"
        }
    }, {new: true});

exports.deleteDoc = (id) => Docs.findOneAndUpdate({_id: id}, {$set:{status: 1}, $currentDate: {timestamp: true, $type: "date"}}, {new: true});