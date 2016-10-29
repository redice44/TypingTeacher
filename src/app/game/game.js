import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import {
  Card, CardActions, CardHeader, CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Results from './results/results';
import Timer from './timer/timer';

const style = {
  margin: 12,
};

class Game extends React.Component {
	constructor(props){
		super(props);
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
			gameType: 1,
      game: props.game
		 }

	 //Bindings
     this.update = this.update.bind(this);
	 this.phraseButtonClick = this.phraseButtonClick.bind(this);
	 this.timeTrialButtonClick = this.timeTrialButtonClick.bind(this);
	 this.tick = this.tick.bind(this);
      this.sendResults = this.sendResults.bind(this);
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
        this.setState({
          phrase: "The quick brown fox jumps over the lazy dog.",
					disabledPhraseButton: true,
					disabledTimeTrialButton: true,
					disabledTextField: false,
					isResults: false,
					typos: 0,
					isTimer: false,
					timer: 2,
					amountOfTypedLetters: 0,
					gameType: 1,
          expanded: true
        });
    }

	timeTrialButtonClick() {
		clearInterval(this.state.interval);
		//var intervalID = setInterval(this.tick, 1000);

      this.setState({
        phrase: "TimeTrial Mode",
				disabledPhraseButton: true,
				disabledTimeTrialButton: true,
				disabledTextField: false,
				isResults: false,
				typos: 0,
				isTimer: true,
				//interval: intervalID,
				timer: 5,
				amountOfTypedLetters: 0,
				gameType: 0,
        expanded: true
      });
  }


	tick(){
		this.setState({timer: this.state.timer - 1});

		if (this.state.timer <= 0) {
			clearInterval(this.state.interval);
		}
	}

  sendResults() {
    console.log('results received');
    this.setState({
      disabledPhraseButton: false,
      disabledTimeTrialButton: false,
      disabledTextField: true, phraseTextField: '',
      counter: 0, isResults: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (process.env.BROWSER && process.env.DEBUG) {
      console.log('=== Will Receive Props: Game', nextProps);
    }
  }

	render() {
    if (process.env.BROWSER && process.env.DEBUG) {
      console.log('=== Render: Game', this.props);
    }
    const c = classNames({
      'content': true
    });

    const styles = {
      root: {

      },
      card: {

      }
    }

		return (
		<div className={c}>
      <Card expanded={this.state.expanded}>
        <CardHeader
          title='Phrase Mode'
          subtitle='subtitle'
        />
        <CardActions style={{textAlign: 'center'}}>
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
        </CardActions>
        <CardText expandable={true} style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '50%'}}>
    				{this.state.isTimer ? <Timer timer={this.state.timer} sendResults={this.sendResults}/>: null}

    				<h3>{this.state.phrase}</h3>

    				<TextField
    					name="phraseTextField"
    					floatingLabelText="Type Here"
    					disabled={this.state.disabledTextField}
    					value={this.state.phraseTextField}
    					onChange={this.update}
              fullWidth={true}
    				/>

    				{this.state.isResults ? <Results />: null}
          </div>
        </CardText>
      </Card>
		</div>
		);
	}
}

export default Game;
