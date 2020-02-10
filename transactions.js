const trans = require("./models/transactions.model");

const mongoose = require('mongoose');

const fs = require('fs');

// make a connection
mongoose.connect('mongodb://localhost/dhishna', {
    useMongoClient : true,
});
 
 
fs.readFile('transactions.json',(err,data) => {
    if(err) console.log(err);
    else {
        let student = JSON.parse(data);
        console.log(student);
        trans.collection.insertMany(student, (data,err) => {
        if(err) console.log(err);
        console.log("Multiple files inserted");
    });
}
});

