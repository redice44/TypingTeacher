import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import slug from 'mongoose-slug';

const Schema = mongoose.Schema;

let Account = new Schema({
  email: String,
  wpm: Number,
  acc: Number
});

Account.plugin(passportLocalMongoose);
Account.plugin(slug('username'));

export default mongoose.model('Account', Account);
