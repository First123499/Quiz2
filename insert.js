

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { id: '001', name: 'John',lname: 'peter', address: 'Highway 71',salary: '10000',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'002',name: 'Peter',lname: 'json', address: 'Lowstreet 4', salary: '20000',role: [
        "admin"
        ,
        "user"
        ]},
    { id: '003',name: 'Amy',lname: 'nanail', address: 'Apple st 652',salary: '30000',role: [
        "admin"
        ,
        "user"
        ]},
    { id: '004',name: 'Hannah',lname: 'Ratta', address: 'Mountain 21',salary: '500000',role: [
        "admin"
        ,
        "user"
        ]},
    { id: '005',name: 'Michael',lname: 'scaret', address: 'Valley 345',salary: '100000',role: [
        "admin"
        ,
        "user"
        ]},
    { id: '006',name: 'Sandy',lname: 'patpong', address: 'Ocean blvd 2',salary: '5000000',role: [
        "admin"
        ,
        "user"
        ]},
    { id: '007',name: 'Betty',lname: 'panthong', address: 'Green Grass 1',salary: '50000',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'008',name: 'Richard',lname:'thaing', address: 'Sky st 331', salary:'910000',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'009',name: 'Susan',lname:'oeung', address: 'One way 98',salary:'2221636',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'010',name: 'Vicky',lname:'asdf', address: 'Yellow Garden 2',salary:'5454820',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'011',name: 'Ben',lname:'sdfkoasf', address: 'Park Lane 38',salary:'5550000',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'023',name: 'William',lname:'sdafldfq', address: 'Central st 954',salary:'500000000000000',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'046',name: 'Chuck',lname:'sakollw', address: 'Main Road 989',salary:'503000',role: [
        "admin"
        ,
        "user"
        ]},
    { id:'058',name: 'Viola',lname:'dfsdfio', address: 'Sideway 1633',salary:'60000000',role: [
        "admin"
        ,
        "user"
        ]}
  ];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});