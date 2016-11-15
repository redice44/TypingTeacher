import Express from 'express';

import Campaign from '../../../../database/campaign/model';
import Account from '../../../../database/account/model';
import GameRun from '../../../../database/gamerun/model';


let router = Express.Router();

const calculateAcc = (keyEvents) => {
	
	let i = 0;
	let noCorrect = 0;

	//Determine number of correct key presses
	for(i = 0; i < keyEvents.length; i++){

		/*
		TODO: Take into account special case characters like
		backspace.
		*/
		
		//Check if keypress was correct
		if(!keyEvents[i].isTypo){
			noCorrect++;
		}
	}
	if(i === 0){
		return 0;
	}
	console.log(noCorrect);
	//increment i to get total number of characters
	console.log(i);
	//Use noCorrect and i to calculate accuracy
	let accuracy = (noCorrect/i) * 100;
	return accuracy;
}


//TODO: Calculate WPM
const calculateWPM = (keyEvents) => {
	let WPM = 0;
	return WPM;
}


//handles results received from a user playing game
router.post('/results', (req, res, next) => {
	console.log('Server says: The req body');
	console.log(req.body);
	let results = req.body.results;
	console.log('Server says: The Results')
	console.log(results);
	//let keyEvents = req.body.results.keyEvents;
	let gameType = req.body.results.timeTrial;
	let difficulty = req.body.results.difficulty;
	let timeOfRun = req.body.results.timeOfRun
	let keyEvents = req.body.results.keyEvents

	let accuracy = calculateAcc(keyEvents);
	let WPM = calculateWPM(keyEvents);



	let gamerun = new GameRun({
		wpm: WPM,
		acc: accuracy,
		timeOfRun: timeOfRun
	});

	console.log('Server says: The final gamerun')
	console.log(gamerun);

	res.json({gamerun: gamerun});
/*	gamerun.save((err) => {
		if(err){
			return next(err);
		}

		Account.findOne({'username': 'test'}, (err, user) => {
			if(err){
				return next(err);
			}

			console.log('found test user', user);
			user.gameruns.push(gamerun._id);
			user.save((err) => {
				if(err){
					return next(err);
				}
				console.log('updated test user');
				return res.json({gamerun: gamerun});
			});
		});
	});*/
});

//test function, just return something
router.get('/test', (req, res, next) => {
	let wpm = 0;
	console.log("sending back tasty info");
	res.json({wpm: wpm});
});

export default router;