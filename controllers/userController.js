const User = require('../models/user');

class UserController {
    static create(req, res) {
        User.create(req.body)
            .then(user => {
                res.send(user);
            });
    }

    static update(req, res) {
        const { id } = req.params;
        User.findByIdAndUpdate(id, req.body)
            .then(() => User.findById(id))
            .then(user => {
                res.send(user);
            });
    }

    static find(req, res) {
        const { id } = req.params;
        User.findById(id)
            .then(() => User.findById(id))
            .then(user => {
                res.send(user);
            });
    }

    static remove(req, res) {
        const { id } = req.params;
        User.findByIdAndRemove(id)
            .then(() => res.send({ id }));
    }

    static index(req, res) {
        const { offset, limit } = req.query;
        Promise.all([
            User.find({})
                .skip(offset)
                .limit(limit),
            User.count()
        ]).then(([users, count]) => {
            res.send({
                users,
                count
            });
        });
    }
}

module.exports = UserController;