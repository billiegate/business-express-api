const express = require("express");
const categoryRoute = express.Router();

let Category = require('../models/Category');

categoryRoute.route('/add').post( function(req, res) {
    let category = new Category(req.body);
    category.save().then( category => {
        res.status(200).json({'category': 'category added'});
    }).catch( err => {
        res.status(400).send("unable to save to database");
    })
});

categoryRoute.route('/').get( function(req, res){
    Category.find(function(err, category) {
        if(err) {
            console.log(err)
        } else {
            res.json(category);
        }
    })
})

module.exports = categoryRoute;