// Dependencies
var express = require('express');
var router = express.Router();

const GroupController = require('../controllers/groupController');
const UserController = require('../controllers/userController');
const MeetingController = require('../controllers/meetingController');
const CommentController = require('../controllers/commentController');
/*
  1. create new user, CRUD
  2. create new group, CRUD
  3. create meeting
  4. select a meeting and add comment
  4. add next user
  5. list groups
  6. join into a group
  7. list meetings under a group
  7. list users under a group
  7. list groups by user
  7. list meetings by user
  
  9. express participate(add himself to meeting.users)
  10. list users by a meeting
  11. add next user
  12. join a group
  13. participate a meeting
  14. cancel participation
  15. add another meeting
  16. cancel meeting
  17. create another group
  18. drop group (cascade drop meetings under group)
*/
// Routes - user
router.post('/users', UserController.create); // #1
router.put('/users/:id', UserController.update); // #1
router.delete('/users/:id', UserController.remove); // #1
// list all members
router.get('/users', UserController.index); // #1
router.get('/users/:id', UserController.find); // #1

// Routes - group #2
router.post('/groups', GroupController.create); // #2
router.put('/groups/:id', GroupController.update);
router.delete('/groups/:id', GroupController.remove);
router.get('/groups', GroupController.index);
router.get('/groups/:id', GroupController.find);

// Routes - meeting #3
router.post('/meetings', MeetingController.create);
router.put('/meetings/:id', MeetingController.update);
router.delete('/meetings/:id', MeetingController.remove);
router.get('/meetings/:id', MeetingController.find);

// joint
// display all users by group
// display all groups by user
// display all meetings by user
// display all meetings by group
router.get('/meetings/:group_id', MeetingController.index);


// Routes - comment
router.post('/comments', CommentController.create);
router.put('/comments/:id', CommentController.update);
router.delete('/comments/:id', CommentController.remove);
// list all comments by meeting
router.get('/comments/:meeting_id', CommentController.index);
router.get('/comments/:id', CommentController.find);

// Return router
module.exports = router;