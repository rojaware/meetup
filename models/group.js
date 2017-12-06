const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: String,
    description: String,
    organizer: String,
    datePosted: Date,
    isActive: Boolean,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});

const Group = mongoose.model('group', GroupSchema);
module.exports = Group;