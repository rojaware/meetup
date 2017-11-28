// Dependencies
var express = require('express');
var router = express.Router();

const GroupController = require('../controllers/groupController');

// Routes - group
router.post('/groups', GroupController.create);
router.put('/groups/:id', GroupController.update);
router.delete('/groups/:id', GroupController.remove);
router.get('/groups', GroupController.index);
// Routes - meeting
router.post('/meetings', MeetingController.create);
router.put('/meetings/:id', MeetingController.update);
router.delete('/meetings/:id', MeetingController.remove);
router.get('/meetings/:group_id', MeetingController.index);
// Routes - user
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.remove);
// list all members by group
router.get('/users/:group_id', UserController.index);

// Routes - comment
router.post('/comments', CommentController.create);
router.put('/comments/:id', CommentController.update);
router.delete('/comments/:id', CommentController.remove);
// list all comments by meeting
router.get('/comments/:meeting_id', CommentController.index);

// Routes - participation
router.post('/participations', ParticipationController.create);
router.put('/participations/:id', ParticipationController.update);
router.delete('/participations/:id', ParticipationController.remove);
router.get('/participations/:meeting_id', ParticipationController.index);

// Return router
module.exports = router;