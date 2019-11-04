const mongose = require('mongoose');
const Schema = mongose.Schema;

//define collection and schema for category
let Category = new Schema({
    name: {
        type: String
    }
}, {
    collection: 'Category'
})

module.exports = mongose.model('Category', Category);