const UD = require('../models/userDetails.model');
const trans = require('../models/transactions.model');

exports.data_show =  (req,res) => {
                trans.find({}, (err,docs) => {
                    if(err) console.log(err);
                    else {
                        let mails = [];
                        for(let i=0;i<docs.length;i++) {
                            mails[i] = docs[i].email;
                        }
                UD.find({email : {$in : mails}},(err,data) => {
                    if(err) console.log("Error");
                    else {
                    console.log(data);
                res.render('display',{data:data});
                    }
                
                });
            }
            });
        }