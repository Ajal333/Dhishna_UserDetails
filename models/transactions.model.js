const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema ({
    name : {type : String},
    college : {type : String},
    email : {type : String},
});

module.exports = mongoose.model('transactions',transactionSchema);