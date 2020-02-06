const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userDetailsSchema = new Schema ({
    name : {type : String},
    college : {type : String},
    email : {type : String},
    phone : {type : Number},
    sem : {type : String}
});

module.exports = mongoose.model('users',userDetailsSchema);