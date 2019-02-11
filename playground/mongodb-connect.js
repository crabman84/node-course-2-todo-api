// //Using ES6 OBject DEstructuring the folowing two lines do the same thing
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
//
// var obj = new ObjectID();
// console.log(obj);


// //Object destructuring:
// var user = {name: "andrew", age: 25};
// var {age} = user;
// console.log(age);




//change in arguments in MongoDB v3: (db => client)
//// so the callback function is then:>(err, client) =>{...}
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("connected to MongoDB server");

  //Mongo v3
  //// const db = client.db("TodoApp");

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc int

  // db.collection("Users").insertOne({
  //   name: "Mikal",
  //   age: 43,
  //   location: "Mother Russia",
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert user", err);
  //   }
  //   // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //
  //   //get Timestampe of when document was created
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

//close connection with db
  db.close();
  //MongoDB v3
  //// 'client.close();' replaces 'db.close(); '
});
