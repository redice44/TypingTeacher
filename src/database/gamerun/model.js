import mongoose from 'mongoose'

const Schema = mongoose.Schema;

/*let keyEventsSchema = new Schema({
	char: String,
	timeStamp: Number,
	isTypo: Boolean,
	position: Number
});*/

let GameRunSchema = new Schema({
	//General Info
	timeOfRun: Number,
	difficulty: Number,


	//Results
	wpm: Number,
	acc: Number
	/*keyAccuracy: [{
		key: String,
		accuracy: Number
	}]*/
});

export default mongoose.model('GameRun', GameRunSchema);