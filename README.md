### Meetup

Create Express MongoDB REST API on 

## Setup application directly from GitHub

1. clone or download this git https://github.com/rojaware/meetup.git to your local directory (for example, c:\vue )
1. go to your local directory (c:\vue) and 'dir' to list, you will find 'c:\vue\meetup' folder has been created
1. cd meetup
1. npm install
1. execute nodemon as below
~~~~
C:\vue\meetup>nodemon server
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server index.js`
Server is running on port 3000 on mongodb : mongodb://localhost/meetup
~~~~
1. from chrome browser, enter url 'http://localhost:3000/api/groups' to display groups in JSON

## Reference 
  - [MEAN STACK : BUILDING REST API WITH NODE AND MONGODB](http://www.bogotobogo.com/MEAN-Stack/Building-REST-API-with-Node-Mongodb.php)
  - [Vijay T's Build an Express API for Mongo database](https://vijayt.com/post/build-an-express-api-for-mongo-database/)
  - [MongoDB Tutorial - Create a Relationship](https://www.quackit.com/mongodb/tutorial/mongodb_create_a_relationship.cfm)
  - [Moongoose Tutorial](http://mongoosejs.com/docs/3.5.x/index.html) 

## Design : ER Diagram
![er_design](https://user-images.githubusercontent.com/11605506/33356881-f17253bc-d48c-11e7-9973-6d9e08c67966.png)

1. mkdir meetup
2. cd meetup
3. create package.json :: npm init
4. install Express :: npm install express --save
5. create server.js and save it under root directory 
Let's make server.js:
~~~~~
  var express = require('express');
  var app = express();
  app.get('/', function(req, res) {
	  res.send('It works');
  });
  app.listen(3000);
  console.log('Listening on port 3000');
~~~~~
6. Run it :: node server.js
7. Test it :: http://localhost:3000/
8. Install mongoose, node-restful, etc :: npm install --save mongoose node-restful
9. Install body-parser :: npm install --save body-parser
10. Install nodemon :: npm install -g nodemon
11. run nodemon instead of node: :: nodemon server.js
12. update server.js
13. add api.js under routes
14. Test it :: http://localhost:3000/api/groups
15. models/group.js
16. update api.js
~~~~~
/routes/api.js
Here is our /routes/api.js:

// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/groups', function(req, res) {
   res.send('api works!');
});

// Return router
module.exports = router;
~~~~~
17. Test it :: http://localhost:3000/api/groups :: Will return 'api works!' on browser
17. npm install dotenv --save
17. Add dotenv to read property from config file in server.js
~~~~
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Environment configuration setup
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

// MongoDB
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(process.env.MONGO_URL, options);
// mongoose.connect('mongodb://localhost/rest_test', options);

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log(`Server is running on port ${port} on mongodb : ${process.env.MONGO_URL}`);
~~~~
17. Then create a .env file at the root directory of your application and add the variables to it.
~~~~
//contents of .env
MONGO_URL=mongodb://localhost/rest_test
PORT=3000
JWT_SECRET=
ADMIN_NAME=
ADMIN_EMAIL=
ADMIN_PASSWORD=
~~~~
17. Finally, add ‘.env’ to your ‘.gitignore’ file so that Git ignores it and it never ends up on GitHub. You can add any keys you want to this file.
17. Add '.env' into .gitignore to protect your credential information from github
~~~~
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Typescript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

~~~~
18. Test on postman - Chrome extensions :: []
19. postman - post :: add test data
20. postman - DELETE

## Beginner's guide to MEAN Stack - MongoDB, Express.js, Angular 2 and Node.js
Nov 2, 2016 :: http://thelillysblog.com/2016/11/02/MEAN-stack-with-Angular2/

## Post Existing project into GitHub repository
Refer to https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/


## JSON Sample
1. add user
2. add group
3. add meeting
4. add comment
# Add User - http://localhost:3000/api/users
~~~~
{
    "name": "giwon",
    "password": "$2a$10$xASn1mLiujUU/ZX66PBV0e6K7guPBloqfXr83FHqnI.u5zTjEydhq",
    "email": "giwon@gmail.com",
    "role": "user",
    "__v": 0,
    "groups": []
}
~~~~
# Add Group - http://localhost:3000/api/groups
~~~~
{
"name" : "Toront Javascript Developers",
"description" : "Angular, React and VueJS",
"datePosted" : "2017-12-12",
"organizer" : "admin", 
"status" : "active", 
"users": ["5a259ae3b96f5132585d5719"], 
"meetings": []
}
~~~~
# Add Meeting
~~~~
{
"subject" : "introduction meeting",
"postedBy" : "5a259ae3b96f5132585d5719",
"place" : "Toronto Meeting Room 1",
"time" : "2017-12-12", 
"users" : ["5a259ae3b96f5132585d5719"],
"group": "5a26e473e5bf922f285aa777", 
"comments": []
}
==> 5a26f2d11dd1780f084b87e0
~~~~
# Add Comment
~~~~
{
"content" : "I am in",
"postedBy" : "5a259ae3b96f5132585d5719",
"meeting" : "5a26f2d11dd1780f084b87e0" 
}

~~~~
# List Users
~~~~
{
    "users": [
        {
            "_id": "5a259ae3b96f5132585d5719",
            "name": "ravir2",
            "password": "$2a$10$xK92232wm2hTF070DJxTM.e46dlopauuskSPBeSFo0KkLcIKZiJN6",
            "email": "ravi@test.com",
            "role": "user",
            "__v": 0,
            "groups": []
        },
        {
            "_id": "5a259b0cb96f5132585d571a",
            "name": "lees4",
            "password": "$2a$10$EMykrrVf7mOEWzRPJAvIy.cnUzHnZ3rY2m.GyVHMvoCw.xULX3xBO",
            "email": "scott@test.com",
            "role": "admin",
            "__v": 0,
            "groups": []
        },
        {
            "_id": "5a259b5bb96f5132585d571b",
            "name": "rufi4",
            "password": "$2a$10$5UHT1tChuXQjlIA06vYzTuAZvbOGmeesjz9o3erhz/1PD9P9na0I2",
            "email": "rufina@test.com",
            "role": "manager",
            "__v": 0,
            "groups": []
        }
    ],
    "count": 3
}
~~~~
# Post Group
~~~~

~~~~