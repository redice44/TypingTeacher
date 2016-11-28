import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let PhraseSchema = new Schema({
  phrase: String
});

export default mongoose.model('Phrase', PhraseSchema);
