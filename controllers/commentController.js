// deprecated by meeting controller
const Comment = require('../models/comment');

class CommentController {
    static create(req, res) {
        Comment.create(req.body)
            .then(comment => {
                res.send(comment);
            });
    }
    static find(req, res) {
        const { id } = req.params;
        Comment.findById(id)
            .then(() => Comment.findById(id))
            .then(comment => {
                res.send(comment);
            });
    }
    static update(req, res) {
        const { id } = req.params;
        Comment.findByIdAndUpdate(id, req.body)
            .then(() => Comment.findById(id))
            .then(comment => {
                res.send(comment);
            });
    }

    static remove(req, res) {
        const { id } = req.params;
        Comment.findByIdAndRemove(id)
            .then(() => res.send({ id }));
    }

    static index(req, res) {
        const { offset, limit } = req.query;
        Promise.all([
            Comment.find({})
                .skip(offset)
                .limit(limit),
            Comment.count()
        ]).then(([comments, count]) => {
            res.send({
                comments,
                count
            });
        });
    }
}

module.exports = CommentController;