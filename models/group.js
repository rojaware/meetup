const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    meetings: [{
        type: Schema.Types.ObjectId,
        ref: 'meeting'
    }]
});

const Group = mongoose.model('group', GroupSchema);
module.exports = Group;