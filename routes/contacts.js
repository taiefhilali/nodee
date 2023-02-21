var express = require('express');
var router = express.Router();
var Contact=require('../models/contact.js')
router.get('/', (req, res, next) => {
   // res.send('respond with a resource');
   res.json({message:'hello'});
  });

  router.post('/', (req, res, next) => {
        var contact = new Contact({fullName:req.body.contactName,phone:req.body.contactNumber});
        contact.save((err,newContact)=>{
            if(err){
                console.log(`there is an errorr ${err}`);

            }else{
                res.json(newContact);
            }

        })
   });


   router.delete('/', (req, res, next) => {
    var contact = new Contact({fullName:req.body.contactName,phone:req.body.contactNumber});
    contact.save((err,newContact)=>{
        if(err){
            console.log(`there is an errorr ${err}`);

        }else{
            res.json(newContact);
        }

    })
});

   
  module.exports=router;