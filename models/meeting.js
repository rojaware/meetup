const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
    subject: String, 
    place: String,
    time: Date,
    reference: String,
    group: {
        type: Schema.Types.ObjectId,
        ref: 'group'
    }, 
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }], 
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});


const Meeting = mongoose.model('meeting', MeetingSchema);
module.exports = Meeting;