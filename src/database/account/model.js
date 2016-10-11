import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

let Account = new Schema({});

Account.plugin(passportLocalMongoose);

export default mongoose.model('Account', Account);
