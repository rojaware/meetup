const Group = require('../models/group');

class GroupController {
    // add new group..
    static create(req, res) {
        Group.create(req.body)
            .then(group => {
                res.send(group);
            });
    }
    static find(req, res) {
        const { id } = req.params;
        Group.findById(id)
            .then(() => Group.findById(id))
            .then(group => {
                res.send(group);
            });
    }
    static update(req, res) {
        const { id } = req.params;
        Group.findByIdAndUpdate(id, req.body)
            .then(() => Group.findById(id))
            .then(group => {
                res.send(group);
            });
    }

    static remove(req, res) {
        const { id } = req.params;
        Group.findByIdAndRemove(id)
            .then(() => res.send({ id }));
    }

    static index(req, res) {
        const { offset, limit } = req.query;
        Promise.all([
            Group.find({})
                .skip(offset)
                .limit(limit),
            Group.count()
        ]).then(([groups, count]) => {
            res.send({
                groups,
                count
            });
        });
    }
}

module.exports = GroupController;