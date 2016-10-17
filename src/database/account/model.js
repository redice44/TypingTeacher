import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import slug from 'mongoose-slug';

const Schema = mongoose.Schema;

let Account = new Schema({
  email: String
});

Account.plugin(passportLocalMongoose);
Account.plugin(slug('username'));

export default mongoose.model('Account', Account);
