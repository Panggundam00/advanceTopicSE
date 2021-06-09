const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const accountSchema = new Schema({
    id: Number,
    name: String,
    balance: Number
});

const AccountModel = mongoose.model('Account', accountSchema)
module.exports = AccountModel