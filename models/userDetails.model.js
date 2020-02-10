const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userDetailsSchema = new Schema ({
    username : {type: String, required: true, unique: true},
    password : {type: String},
    resetPasswordToken : {type: String},
    resetPasswordExpires : {type: Date},

    // personal info
    name : {type:String, max: 100},
    phone : {type: String},
    inst : {type: String},

    // registration info
    events : [{type: String, unique: true}],
    ws : [{type: String, unique: true}],

    // accommodation
    AccApplied : String,
    AccDate : String
});

module.exports = mongoose.model('users',userDetailsSchema);