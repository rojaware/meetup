const Group = require('../models/group');
const User = require('../models/user');

class GroupController {
    // create new group..
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
    static addUser(req, res) {
        const groupId = req.params.id ;
        const userId = req.params.userId ;
        Group.findByIdAndUpdate(groupId, {$addToSet : {"users": userId }})
            .then(() => Group.findById(groupId))
            .then(group => {
                res.send(group);
            });
        User.findByIdAndUpdate(userId,  {$addToSet : {"groups": groupId }})
            .then(() => User.findById(id));   
    }
    static addMeeting(req, res) {
        const groupId = req.params.id ;
        const meetingId = req.params.meetingId ;
        Group.findByIdAndUpdate(groupId, {$addToSet : {"meetings": meetingId }})
            .then(() => Group.findById(groupId))
            .then(group => {
                res.send(group);
            });
        User.findByIdAndUpdate(userId,  {$addToSet : {"groups": groupId }})
            .then(() => User.findById(id));   
    }
}

module.exports = GroupController;