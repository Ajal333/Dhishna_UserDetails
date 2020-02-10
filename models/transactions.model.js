const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema ({
    payment_id : {type : String},
    payment_for : {type : String},
    status : {type : String},
    buyer : {type: String}
});

module.exports = mongoose.model('transactions',transactionSchema);