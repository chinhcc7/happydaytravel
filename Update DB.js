const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DataGuest',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
const Schema = mongoose.Schema;

const account = new Schema({
  username: String,
  password: String,
},{
      collection : 'account'
});
const AccountModel = mongoose.model('account',account);

AccountModel.find({})
.then(function(data){
    console.log('data',data);
})
.catch(function(err){
    console.log('Loi',error);
})
