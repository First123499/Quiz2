var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function (err, database){
   if(err) throw err;
   db = database;
   console.log("Connected to" +url);


});

function findAll(req ,res){
    //Get data from mongoDB
        db.collection("users").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);
        });

}

function searchSalary(req,res){
    var salary = req.param('sal');
        var query = {
            salary:salary
        };
        console.log(query);
        db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
           
        });
}

function findByname(req, res) {
var name =req.param('fname');
    var query = {
        name: name
    };
    console.log(query);
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
       
    });
    
};

function findByrole(req, res) {
    var query = {
        role: req.params.role
    };
    console.log(query);
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
        ;
    });
    
};

module.exports = {
    findAll: findAll,
    findByname: findByname,
    findByrole: findByrole,
    searchSalary:searchSalary
    
    };