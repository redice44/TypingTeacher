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
	  interval: 0,
	  amountOfTypedLetters: 0,
	  gameType: props.gameType,
	  game: props.game,
	  acc: 0,
	  timeTrialWasClicked: false
    }

	this.props.playTime();
	//Bindings
    this.update = this.update.bind(this);
	this.phraseButtonClick = this.phraseButtonClick.bind(this);
	this.timeTrialButtonClick = this.timeTrialButtonClick.bind(this);
	this.tick = this.tick.bind(this);
    this.sendResults = this.sendResults.bind(this);
  };

  update(e){	
	console.log(this.state.gameType);
   	if((e.target.value.length < this.state.phraseTextField.length && this.state.timer > 0 && this.state.gameType == util.c.TIME) ||
		(e.target.value.length < this.state.phraseTextField.length && this.state.gameType == util.c.PHRASE)){	//If User pressed backspace		
	  this.setState({
	    phraseTextField: e.target.value,
		counter: this.state.counter - 1,
		amountOfTypedLetters: this.state.amountOfTypedLetters - 1});
			
	  if(this.state.phrase.substring(this.state.counter - 1,this.state.counter) == '*')	{ //If current char is a typo...
	    var newPhrase = this.state.phrase.slice(0, this.state.counter - 1) + 
			            this.state.originalPhrase.slice(this.state.counter - 1, this.state.phrase.length);
					  
	    this.setState({
		  phrase: newPhrase,
		  typos: this.state.typos - 1});
	  }	
	}
	else if((this.state.counter < this.state.phrase.length && this.state.timer > 0 && this.state.gameType == util.c.TIME) || 
			((this.state.counter < this.state.phrase.length && this.state.gameType == util.c.PHRASE))){ //If user has not typed all characters...
	  var inputChar = e.target.value.substring(this.state.counter,this.state.counter + 1);
	  var currentChar = this.state.phrase.substring(this.state.counter,this.state.counter + 1);
	  //Compare user input
	  if(inputChar != currentChar){
		var input = this.state.phrase.slice(0, this.state.counter) +
					'*' + this.state.phrase.slice(this.state.counter +
					1, this.state.phrase.length);

	    this.setState({
		  phraseTextField: e.target.value,
		  phrase: input,
		  counter: this.state.counter + 1,
		  typos: this.state.typos + 1,
		  amountOfTypedLetters: this.state.amountOfTypedLetters + 1});
	  }
	  else{
		this.setState({
		  phraseTextField: e.target.value,
		  counter: this.state.counter + 1,
		  amountOfTypedLetters: this.state.amountOfTypedLetters + 1});
	  }
	}
	else if ((this.state.timer > 0) && (this.state.gameType == util.c.TIME)){ //Update Phrase
	  this.props.playTime();
	  this.setState({
		phrase: this.props.phrase,
		phraseTextField: "",
		counter: 0});
	}
	else{	//Display Results
	  var accuracy = 100 - (this.state.typos/(this.state.amountOfTypedLetters) * 100);	//Calculate accuracy
	  accuracy = Math.round(accuracy);
	  this.props.updateResults({acc: accuracy});
			
	  this.setState({ 
		disabledPhraseButton: false,
		acc: accuracy,
		disabledTimeTrialButton: false,
		disabledTextField: true, phraseTextField: '',
		counter: 0, isResults: true});
	}
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
	  amountOfTypedLetters: 0,
	  gameType: util.c.PHRASE,
	  expanded: true});	
  }
 
  timeTrialButtonClick() {
	clearInterval(this.state.interval);
	//var intervalID = setInterval(this.tick, 1000);
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
	//interval: intervalID,
	  timer: 5,
	  amountOfTypedLetters: 0,
	  gameType: util.c.TIME,
      expanded: true,
	  timeTrialWasClicked: !this.state.timeTrialWasClicked});
  }


  tick(){
	this.setState({timer: this.state.timer - 1});

	if (this.state.timer <= 0) {
	  clearInterval(this.state.interval);
	}
  }

  sendResults() {
    console.log('results received');
	var accuracy = 100 - (this.state.typos/(this.state.amountOfTypedLetters) * 100);	//Calculate accuracy
	this.props.updateResults({acc: accuracy});
	
    this.setState({
      disabledPhraseButton: false,
	  acc: Math.round(accuracy),
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

    				{this.state.isResults ? <Results acc={this.state.acc}/>: null}
          </div>
        </CardText>
      </Card>
	</div>
	);
  }
}

export default Game;
