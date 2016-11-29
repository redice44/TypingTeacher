import Express from 'express';

import Campaign from '../../../../database/campaign/model';
import Account from '../../../../database/account/model';
import GameRun from '../../../../database/gamerun/model';


let router = Express.Router();


/*
Function for calulating accuracy from a list of keyevents
*/
const calculateKeyAcc = (keyEvents) => {
	return 0;
};

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

	//Use noCorrect and i to calculate accuracy
	let accuracy = (noCorrect/i) * 100;
	return accuracy;
};


/*
  Add up all of the correct key presses, divide by typical
  word size, and divide by the total time it took to
  type of the characters. Counting only correct key presses
  assures that users cant acheive impossibly fast typing
  speeds by simply hitting many keys on the keyboard
  with no purpose.
*/
const calculateWPM = (keyEvents) => {
	let WPM;
	let elapsedMin;
	let elapsedTime;

	let i;
	let correctKeyPresses = 0;
	for(i = 0; i < keyEvents.length; i++){
		if(!keyEvents[i].isTypo){
			correctKeyPresses++;
		}
	}

	elapsedTime = keyEvents[keyEvents.length - 1].timeStamp 
		- keyEvents[0].timeStamp;
	elapsedMin = elapsedTime/1000/60;
	WPM = (Math.ceil(correctKeyPresses/5)/elapsedMin);

	return WPM;
};

const calculateAverages = (gameruns) => {

	let WPMsum = 0;
	let accSum = 0;
	let i;

	for(i = 0; i < gameruns.length; i++){
		WPMsum += gameruns[i].wpm;
		accSum += gameruns[i].acc;
	}

	console.log(i);
	let avgWPM = WPMsum/i;
	let avgAcc = accSum/i;

	return {
		avgWPM: avgWPM,
		avgAcc: avgAcc
	};
};

//handles results received from a user playing game
router.post('/results', (req, res, next) => {

	//Retrieve request contents
	console.log('Server says: The req body');
	console.log(req.body);
	let results = req.body.results;
	console.log('Server says: The Results');
	console.log(results);
	let username = req.body.username;
	let gameType = req.body.results.timeTrial;
	let difficulty = req.body.results.difficulty;
	let timeOfRun = req.body.results.timeOfRun;
	let keyEvents = req.body.results.keyEvents;

	//calculate statistical values
	let accuracy = calculateAcc(keyEvents);
	let WPM = calculateWPM(keyEvents);


	//create new database entry
	let gamerun = new GameRun({
		wpm: WPM,
		acc: accuracy,
		timeOfRun: timeOfRun
	});


	console.log('Server says: The final gamerun');
	console.log(gamerun);

	//save the gamerun to the database
	gamerun.save((err) => {

		//handle misc database errors
		if(err){
			return next(err);
		}

		//find user to update that it has a new gamerun
		Account.findOne({'username': 'test'}, (err, user) => {

			//handle misc database erros
			if(err){
				return next(err);
			}

			console.log('found test user', user);

			//add gamerun id to users list of gamerun ids
			user.gameruns.push(gamerun._id);

			//save this new user back to the database
			user.save((err) => {
				if(err){
					return next(err);
				}

				//send gamerun data back to the client
				console.log('updated test user');
				return res.json({gamerun: gamerun});
			});
		});
	});
});

/*
GET Method to retrieve the users complete game history sorted by time.
*/
router.get('/:username/runs', (req, res, next) => {

	console.log(req.params);
	//Find appropriate user to get their game history
	Account.findOne({'username': req.params.username}, (err, user) => {

		//handle misc database error
		if(err){
			return console.log(err);
		}

		//construct the query criteria to get all of the users gameruns

		const q = {
			_id: { $in: user.gameruns }
		};
		
		console.log(q);
		//execute the query for the users gameruns
		GameRun.find(q)
		.sort({timeOfRun: 1})
		.exec((err, gameruns) => {
			if(err){
				return console.log(err);
			}
			console.log(gameruns);

			let avgs = calculateAverages(gameruns);

			res.json({
				avgAcc: avgs.avgAcc,
				avgWPM: avgs.avgWPM,
				gameruns: gameruns
			});
		});
	});
});


/*
GET Receives the 'quantity' most recent game runs for the specified user
sorted by time.
*/
router.get('/:username/runs/:quantity', (req, res, next) => {

	console.log(req.params);
	//Find appropriate user to get their game history
	Account.findOne({'username': req.params.username}, (err, user) => {

		//handle misc database error
		if(err){
			return console.log(err);
		}

		//construct the query criteria to get all of the users gameruns

		/*const q = {
			_id: { $in: user.gameruns }
		};*/
		
		let q = [];

		q.push({
			$match:{ _id: { $in: user.gameruns} }
		});

		q.push({
			$sort:{timeOfRun: -1}
		});

		q.push({
			$limit: parseInt(req.params.quantity)
		});

		q.push({
			$sort: { timeOfRun: 1}
		});

		console.log(q);
		GameRun.aggregate(q)
		.exec((err, gameruns) => {
			if(err){
				return console.log(err);
			}
			console.log(gameruns);

			let avgs = calculateAverages(gameruns);

			res.json({
				avgAcc: avgs.avgAcc,
				avgWPM: avgs.avgWPM,
				gameruns: gameruns
			});
		});

		//execute the query for the users gameruns

/*		var query = GameRun.find(q)
		.sort({timeOfRun: -1})
		.limit(parseInt(req.params.quantity));
		.sort({timeOfRun: 1})
		.exec((err, gameruns) => {
			if(err){
				return console.log(err);
			}
			console.log(gameruns);

			let avgs = calculateAverages(gameruns);

			res.json({
				avgAcc: avgs.avgAcc,
				avgWPM: avgs.avgWPM,
				gameruns: gameruns
			});
		});*/
	});
});


/*
GET Retrieves the history of a user related to a specific campaign.
*/
/*
router.get('/:username/runs/campaign/:campaign', (req, res, next) => {

	console.log(req.params);
	//Find appropriate user to get their game history
	Account.findOne({'username': req.params.username}, (err, user) => {

		//handle misc database error
		if(err){
			return console.log(err);
		}

		//construct the query criteria to get all of the users gameruns

		const q = {
			_id: { 
				$in: user.gameruns,
			},
			timeOfRun: {
				$lt: req.params.to,
				$gt: req.params.from
			},
			campaign: campaign
		};
		
		console.log(q);
		//execute the query for the users gameruns
		GameRun.find(q, (err, gameruns) => {
			if(err){
				return console.log(err);
			}
			console.log(gameruns);

			let avgs = calculateAverages(gameruns);

			res.json({
				avgAcc: avgs.avgAcc,
				avgWPM: avgs.avgWPM,
				gameruns: gameruns
			});
		});
	});
});
*/
/*
GET to receive user game history within a time frame, sorted by time
*/
router.get('/:username/runs/period/:from-:to', (req, res, next) => {

	console.log(req.params);
	//Find appropriate user to get their game history
	Account.findOne({'username': req.params.username}, (err, user) => {

		//handle misc database error
		if(err){
			return console.log(err);
		}

		//construct the query criteria to get all of the users gameruns

		const q = {
			_id: { $in: user.gameruns },
			timeOfRun: {
				$lt: req.params.to,
				$gt: req.params.from
			}
		};
		
		console.log(q);
		//execute the query for the users gameruns
		GameRun.find(q)
		.sort({timeOfRun: 1})
		.exec((err, gameruns) => {
			if(err){
				return console.log(err);
			}
			console.log(gameruns);

			let avgs = calculateAverages(gameruns);

			res.json({
				avgAcc: avgs.avgAcc,
				avgWPM: avgs.avgWPM,
				gameruns: gameruns
			});
		});
	});
});


export default router;