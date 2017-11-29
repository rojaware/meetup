const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Comment = require('./comment');

const MeetingSchema = new Schema({
    subject: String,
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    place: String,
    time: Date,
    reference: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }], 
    comments: [Comment.schema]
});


const Meeting = mongoose.model('meeting', MeetingSchema);
module.exports = Meeting;