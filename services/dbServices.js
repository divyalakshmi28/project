var MongoClient= require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://divya28:divudivu28@ds255787.mlab.com:55787/projectorapp").then(function(client){
    console.log("connected to mongodb");
    exports.database = client.db("projectorapp");

  });
}
