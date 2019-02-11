const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("connected to MongoDB server");

  // db.collection("Todos").find({
  //   _id: new ObjectID("5c61d8d63747e25edc9a8d81")
  // }).toArray().then((docs) =>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log("Unable to fetch todos", err);
  // })

  // db.collection("Todos").find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log("Unable to fetch todos", err);
  // })

  db.collection("Users").find({name: "Mikal"}).toArray().then((docs) =>{
    // console.log(`Users count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));1
  }, (err) =>{
    console.log("Unable to fetch todos", err);
  })

  db.close();
});
