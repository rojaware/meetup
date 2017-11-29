const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Meeting = require('./meeting');

const GroupSchema = new Schema({
    name: String,
    description: String,
    organizer: String,
    datePosted: Date,
    status: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }], 
    meetings: [Meeting.schema]
});

const Group = mongoose.model('group', GroupSchema);
module.exports = Group;