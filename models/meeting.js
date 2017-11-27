const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
    subject: String,
    place: String,
    time: Date,
    reference: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});


const Meeting = mongoose.model('meeting', MeetingSchema);
module.exports = Meeting;