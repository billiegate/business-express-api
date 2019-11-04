const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  business_name: {
    type: String
  },
  category:  {
    type: String
  },
  description: {
    type: String
  },
  email: {
    type: String
  },
  website: {
    type: String
  },
  business_phone_number: {
    type: Number
  },
  address: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);