#!/usr/bin/env node
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/essdatabase');


var User = require('./app/models/user');
  
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'bsevilayha',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

mongoose.disconnect();
