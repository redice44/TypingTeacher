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
import util from './constants';

const style = {
  margin: 12,
};

class Game extends React.Component {
  constructor(props){
	super(props);
	this.state = {
	  phrase: "",
	  originalPhrase: "",
	  phraseTextField: '',
	  typos: 0,
	  counter: 0,
	  disabledPhraseButton: false,
	  disabledTimeTrialButton: false,
	  disabledTextField: true,
	  isResults: false,
	  isTimer: false,
	  timer: 0,
	  amountOfTypedLetters: 0,
	  gameType: props.gameType,
	  game: props.game,
	  acc: 0,
	  timeTrialWasClicked: false,
	  timestamp: [],
	  wpm: 0,
	  amountOfCharsTyped: 0,
	  amountOfWords: 0,
	  startTime: 0
    }

	this.props.playTime();
	//Bindings
    this.update = this.update.bind(this);
	this.phraseButtonClick = this.phraseButtonClick.bind(this);
	this.timeTrialButtonClick = this.timeTrialButtonClick.bind(this);
    this.sendResults = this.sendResults.bind(this);
  };
  

  increaseAmountOfWords(){
	var currentChar = this.state.originalPhrase.slice(this.state.counter, this.state.counter + 1);
	if( currentChar== " " || currentChar == "\n") { // Increase amount of words if " " is found
	  console.log("amount of words " + this.state.amountOfWords);
	  this.setState({amountOfWords: this.state.amountOfWords + 1});
	}	  
  }
  
  decreaseAmountOfWords(){
	var currentChar = this.state.originalPhrase.slice(this.state.counter - 1, this.state.counter);
	if(currentChar == " " || currentChar == "\n") { // Decrease amount of words if " " is found
	  console.log("Backspace empty char" + currentChar + "s");
	  this.setState({amountOfWords: this.state.amountOfWords - 1});
	}	
  }
  
  checkForTypos(str){
	this.setState({
	  phraseTextField: str,
	  counter: this.state.counter - 1,
	  amountOfTypedLetters: this.state.amountOfTypedLetters - 1}); 
	  
	if(this.state.phrase.substring(this.state.counter - 1,this.state.counter) == '*'){ //Check for typos
      var newPhrase = this.state.phrase.slice(0, this.state.counter - 1) + 
					  this.state.originalPhrase.slice(this.state.counter - 1, this.state.phrase.length);  	
					  
	  this.setState({
		phrase: newPhrase,
		typos: this.state.typos - 1});
	}	
  }
  
  compareInput(str){
	  var inputChar = str.substring(this.state.counter,this.state.counter + 1);
	  var currentChar = this.state.phrase.substring(this.state.counter,this.state.counter + 1);	  
	  
	  if(inputChar != currentChar){//compare current char with entered char
		var input = this.state.phrase.slice(0, this.state.counter) +
					'*' + this.state.phrase.slice(this.state.counter +
					1, this.state.phrase.length);

	    this.setState({
		  phraseTextField: str,
		  phrase: input,
		  counter: this.state.counter + 1,
		  typos: this.state.typos + 1,
		  amountOfTypedLetters: this.state.amountOfTypedLetters + 1});
	  }
	  else {
		this.setState({
		  phraseTextField: str,
		  counter: this.state.counter + 1,
		  amountOfTypedLetters: this.state.amountOfTypedLetters + 1});
	  }
  }
  
  update(e){	  
    this.state.timestamp.push(Date.now()); // Collect timestamp
	this.setState({amountOfCharsTyped: this.state.amountOfCharsTyped + 1}); //Count everytime user types

   	if((e.target.value.length < this.state.phraseTextField.length && this.state.timer > 0 && this.state.gameType == util.c.TIME) ||
		(e.target.value.length < this.state.phraseTextField.length && this.state.gameType == util.c.PHRASE)){	//If User pressed backspace		
	  this.checkForTypos(e.target.value); //if backspaced char was a typo, change it to original
  
	  this.decreaseAmountOfWords();	    //Decrease amount of words if char is " "	
	}
	else if((this.state.counter < this.state.phrase.length - 1 && this.state.timer > 0 && this.state.gameType == util.c.TIME) || //If user has not typed all characters...
			((this.state.counter < this.state.phrase.length - 1 && this.state.gameType == util.c.PHRASE))){  
	  this.increaseAmountOfWords(); // Check for spaces and return carriage
	  this.compareInput(e.target.value);   //COmpare if current letter is equal to input
	}
	else if ((this.state.timer > 0) && (this.state.gameType == util.c.TIME)){ //if timer is still running and this is time trial...
	  this.updatePhrase();  // change current phrase
	}
	else{	//Display Results for phrase mode
	  this.compareInput(e.target.value);
	  this.setState({amountOfWords: this.state.amountOfWords + 1});
	  this.sendResults();
	}
  }

  updatePhrase(){
	this.setState({
	  amountOfWords: this.state.amountOfWords + 1,
	  phrase: this.props.phrase,
	  originalPhrase: this.props.phrase,
	  phraseTextField: "",
	  counter: 0});
	  this.props.playTime();
  }
  
  phraseButtonClick() {
	clearInterval(this.state.interval);
	this.props.playPhrase();
	
    this.setState({
      phrase: this.props.phrase,
	  originalPhrase: this.props.phrase,
	  disabledPhraseButton: true,
	  disabledTimeTrialButton: true,
	  disabledTextField: false,
	  isResults: false,
	  typos: 0,
	  isTimer: false,
	  timer: 0,
	  startTime: Date.now() / 1000,
	  wpm: 0,
	  amountOfTypedLetters: 0,
	  amountOfCharsTyped: 0,
	  amountOfWords: 0,
	  gameType: util.c.PHRASE,
	  expanded: true,
	  timestamp: []});	
  }
 
  timeTrialButtonClick() {
	clearInterval(this.state.interval);

	this.props.playTime();
    this.setState({
	  phrase: this.props.phrase,
	  originalPhrase: this.props.phrase,
	  disabledPhraseButton: true,
	  disabledTimeTrialButton: true,
	  disabledTextField: false,
	  isResults: false,
	  typos: 0,
      isTimer: true,
	  timer: 10,
	  wpm: 0,
	  amountOfTypedLetters: 0,
	  amountOfCharsTyped: 0,
	  amountOfWords: 0,
	  gameType: util.c.TIME,
      expanded: true,
	  timeTrialWasClicked: !this.state.timeTrialWasClicked,
	  timestamp: []});
  }

  calculateWPM(time){
	console.log(this.state.amountOfCharsTyped + " " + (this.state.amountOfWords) + " " + time);
	var wpm = (this.state.amountOfCharsTyped /  this.state.amountOfWords + 1) * 60 / time;
	return Math.round(wpm);
  }
  
  
  sendResults() {
    console.log('results received');
	var accuracy = 100 - (this.state.typos/(this.state.amountOfTypedLetters) * 100);	//Calculate accuracy
	accuracy = Math.round(accuracy); 		
	var time = Math.round((Date.now() / 1000) - this.state.startTime);
	  
	this.setState({ 
	  disabledPhraseButton: false,
	  acc: accuracy,
	  disabledTimeTrialButton: false,
	  disabledTextField: true, 
	  phraseTextField: '',
	  counter: 0, isResults: true,
	  timer: (this.state.gameType == util.c.PHRASE ? time: this.state.timer),
	  amountOfWords: this.state.amountOfWords + 1,
	  wpm: this.calculateWPM((this.state.gameType == util.c.PHRASE ? time: this.state.timer)),
	});
		
	this.props.updateResults({acc: accuracy, 
	                 		timeStamps: this.state.timestamps,
							wpm: this.state.wpm,
							timer: this.state.timer,
							gameMode: this.state.gameType});
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
          title={this.state.gameType == util.c.PHRASE ? 'Phrase Mode' : 'Time Trial Mode'}
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
    				{this.state.isTimer ? <Timer timer={this.state.timer} timeTrialWasClicked={this.state.timeTrialWasClicked} sendResults={this.sendResults}/>: null}

    				<h3>{this.state.phrase}</h3>
    				<TextField
    					name="phraseTextField"
    					floatingLabelText="Type Here"
    					disabled={this.state.disabledTextField}
    					value={this.state.phraseTextField}
    					onChange={this.update}
              fullWidth={true}
    				/>

    				{this.state.isResults ? <Results acc={this.state.acc} wpm={this.state.wpm} timer={this.state.timer} />: null}
          </div>
        </CardText>
      </Card>
	</div>
	);
  }
}

export default Game;
