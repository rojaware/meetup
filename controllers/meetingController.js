const Meeting = require('../models/meeting');

class MeetingController {
    static create(req, res) {
        Meeting.create(req.body)
            .then(meeting => {
                res.send(meeting);
            });
    }
    static find(req, res) {
        const { id } = req.params;
        Meeting.findById(id)
            .then(() => Meeting.findById(id))
            .then(meeting => {
                res.send(meeting);
            });
    }
    static update(req, res) {
        const { id } = req.params;
        Meeting.findByIdAndUpdate(id, req.body)
            .then(() => Meeting.findById(id))
            .then(meeting => {
                res.send(meeting);
            });
    }

    static remove(req, res) {
        const { id } = req.params;
        Meeting.findByIdAndRemove(id)
            .then(() => res.send({ id }));
    }

    static index(req, res) {
        const { offset, limit } = req.query;
        Promise.all([
            Meeting.find({})
                .skip(offset)
                .limit(limit),
            Meeting.count()
        ]).then(([meetings, count]) => {
            res.send({
                meetings,
                count
            });
        });
    }
}

module.exports = MeetingController;