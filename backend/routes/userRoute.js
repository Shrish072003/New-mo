const express = require('express');
const user_route = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const user_controller = require('../controllers/userController');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

user_route.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/userImages'));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  }
});

const upload = multer({ storage: storage });

user_route.post('/enduser', upload.single('image'), user_controller.register_user);

user_route.put('/enduser/:id', upload.single('image'), user_controller.editUser);

user_route.get('/exportUser', user_controller.exportUser);

user_route.get('/enduser/:id', user_controller.getUserById);
user_route.get('/enduser/filterByDate', user_controller.filterUsersByDate);

module.exports = user_route;
