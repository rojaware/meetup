const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    datePosted: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    meeting: {
        type: Schema.Types.ObjectId,
        ref: 'meeting'
    }
});

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;