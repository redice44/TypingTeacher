import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let LevelSchema = new Schema({
  wpm: Number,
  acc: Number,
  difficulty: Number
});

let CampaignSchema = new Schema({
  name: String,
  levels: [LevelSchema]
});

export default mongoose.model('Campaign', CampaignSchema);
