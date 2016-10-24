import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class Game extends React.Component {
	constructor(){
		super();
		this.state = {
			phrase: '',
			phraseTextField: '',
			typos: 0,
			counter: 0,
			disabledPhraseButton: false,
			disabledTimeTrialButton: false,
			disabledTextField: true,
			isResults: false,
			isTimer: false,
			timer: 0,
			interval: 0,
			amountOfTypedLetters: 0,
			gameType: 1
		 }

	 //Bindings
     this.update = this.update.bind(this);
	 this.phraseButtonClick = this.phraseButtonClick.bind(this);
	 this.timeTrialButtonClick = this.timeTrialButtonClick.bind(this);
	 this.tick = this.tick.bind(this);
    };

	update(e){
		if(this.state.counter < this.state.phrase.length && this.state.timer > 0){ //If user has not typed all characters...
			var inputChar = e.target.value.substring(this.state.counter,this.state.counter + 1);
			var currentChar = this.state.phrase.substring(this.state.counter,this.state.counter + 1);

			//Compare user input
			if(inputChar != currentChar){
				var input = this.state.phrase.slice(0, this.state.counter) +
							'*' + this.state.phrase.slice(this.state.counter +
							1, this.state.phrase.length);

				this.setState({phraseTextField: e.target.value,
							phrase: input,
							counter: this.state.counter + 1,
							typos: this.state.typos + 1,
							amountOfTypedLetters: this.state.amountOfTypedLetters + 1});
			}
			else{
				this.setState({phraseTextField: e.target.value,
							counter: this.state.counter + 1,
							amountOfTypedLetters: this.state.amountOfTypedLetters + 1});
			}
		}
		else if ((this.state.timer > 0) && (this.state.gameType == 0)){ //Update Phrase
			this.setState({phrase: "New Phrase",
						phraseTextField: "",
						counter: 0});
		}
		else{	//Display Results
			this.setState({ disabledPhraseButton: false,
							disabledTimeTrialButton: false,
							disabledTextField: true, phraseTextField: '',
							counter: 0, isResults: true});
		}
	}

	phraseButtonClick() {
		clearInterval(this.state.interval);
        this.setState({ phrase: "Phrase Mode",
						disabledPhraseButton: true,
						disabledTimeTrialButton: true,
						disabledTextField: false,
						isResults: false,
						typos: 0,
						isTimer: false,
						timer: 2,
						amountOfTypedLetters: 0,
						gameType: 1});
    }

	timeTrialButtonClick() {
		clearInterval(this.state.interval);
		var intervalID = setInterval(this.tick, 1000);

        this.setState({ phrase: "TimeTrial Mode",
						disabledPhraseButton: true,
						disabledTimeTrialButton: true,
						disabledTextField: false,
						isResults: false,
						typos: 0,
						isTimer: true,
						interval: intervalID,
						timer: 30,
						amountOfTypedLetters: 0,
						gameType: 0});
    }

	displayResults(){
		var percentage = 100 - (this.state.typos/(this.state.amountOfTypedLetters) * 100);

		if(this.state.typos > 0){
			return (
				<div>
					<h1>Results</h1>
					<p>Typos: {this.state.typos}</p>
					<p>Accuracy:  {Math.round(percentage)}% </p>
				</div>
			)
		}
		else{
			return (
				<div>
					<h1>Results</h1>
					<p>Typos: None</p>
					<p>Accuracy:  100% </p>
				</div>
			)
		}
	}

	displayTimer(){
		return(
			<div>
				<h1>Time: {this.state.timer} seconds</h1>
			</div>
		)
	}

	tick(){
		this.setState({timer: this.state.timer - 1});

		if (this.state.timer <= 0) {
			clearInterval(this.state.interval);
		}
	}

	render(){
    const c = classNames({
      'content': true
    });

		return (
		<div>
			<Paper zDepth={1} className={c}>

				<RaisedButton
					label='Phrase Mode'
					style={style}
					primary={true}
					disabled={this.state.disabledPhraseButton}
					onClick={this.phraseButtonClick}
				/>

				<RaisedButton
					label='Time Trial Mode'
					style={style}
					primary={true}
					disabled={this.state.disabledTimeTrialButton}
					onClick={this.timeTrialButtonClick}
				/>

				{this.state.isTimer ? this.displayTimer(): null}

				<p>Phrase: {this.state.phrase}</p>
				<p>Counter: {this.state.counter}</p>
				<p>Typos: {this.state.typos}</p>

				<TextField
					name="phraseTextField"
					floatingLabelText="Type Here"
					disabled={this.state.disabledTextField}
					value={this.state.phraseTextField}
					onChange={this.update}
				/>

				{this.state.isResults ? this.displayResults(): null}

				<br />
				<Link to='/dashboard'>Dashboard Link</Link>
            </Paper>

		</div>
		);
	}
}

export default Game;
