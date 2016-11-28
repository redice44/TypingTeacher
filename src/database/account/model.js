import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import slug from 'mongoose-slug';

const Schema = mongoose.Schema;

let Account = new Schema({
  email: String,
  isTeacher: Boolean,
  wpm: Number,
  acc: Number,
  campaignList: [Schema.Types.ObjectId],
  gameruns: [Schema.Types.ObjectId]
});

Account.plugin(passportLocalMongoose);
Account.plugin(slug('username'));

export default mongoose.model('Account', Account);
