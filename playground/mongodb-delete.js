const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //  console.log(result);
  //});

//  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
//  });

//db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //console.log(result);
//})
db.collection('Users').deleteMany({name: 'Andrew'});

/*db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5990bb01061d5225f4ffb068');
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});*/
});
