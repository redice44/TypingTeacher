import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

let Account = new Schema({
  email: String
});

Account.plugin(passportLocalMongoose);

export default mongoose.model('Account', Account);
