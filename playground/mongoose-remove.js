const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//  console.log(result);
//});

Todo.findOneAndRemove({_id: '5994a3a65f9ab02c144bcb07'}).then((todo) => {

});

Todo.findByIdAndRemove({_id: '5994a3a65f9ab02c144bcb07'}).then((todo) => {
  console.log(todo);
});
