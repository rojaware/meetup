const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipationSchema = new Schema({
    content: String,
    datePosted: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    meeting: {
        type: Schema.Types.ObjectId,
        ref: 'meeting'
    }
});

const Participation = mongoose.model('participation', ParticipationSchema);
module.exports = Participation;