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
import request from 'superagent';

const style = {
  margin: 12,
};

const backgroundRed = {
  background: "red",
  margin: "1px"
};

const styleRed = {
  color: 'red'
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
	  gameType: props.gameType,
	  game: props.game,
	  acc: 0,
	  timeTrialWasClicked: false,
	  keyEvents: [],
	  wpm: 0,
	  startTime: 0
    }

	this.props.playTime();
	//Bindings
    this.update = this.update.bind(this);
	this.phraseButtonClick = this.phraseButtonClick.bind(this);
	this.timeTrialButtonClick = this.timeTrialButtonClick.bind(this);
    this.sendResults = this.sendResults.bind(this);
	this.replaceString = this.replaceString.bind(this);
  };
  
  checkForTypos(str){
	this.setState({
	  phraseTextField: str,
	  counter: this.state.counter - 1}); 
	  
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
		  counter: this.state.counter + 1});
		
		this.state.typos = this.state.typos + 1;	
	  }
	  else {
		this.setState({
		  phraseTextField: str,
		  counter: this.state.counter + 1});
	  }
  }
  
  update(e){	  
    this.state.keyEvents.push({
	  key: e.target.value[e.target.value.length - 1],
	  timeStamp: Date.now(),
      isTypo: (e.target.value[e.target.value.length - 1] != this.state.phrase.substring(this.state.counter,this.state.counter + 1))
	}); // Collect Key Events

   	if((e.target.value.length < this.state.phraseTextField.length && this.state.timer > 0 && this.state.gameType == util.c.TIME) ||
		(e.target.value.length < this.state.phraseTextField.length && this.state.gameType == util.c.PHRASE)){	//If User pressed backspace		
	  this.checkForTypos(e.target.value); //if backspaced char was a typo, change it to original
	}
	else if((this.state.counter < this.state.phrase.length - 1 && this.state.timer > 0 && this.state.gameType == util.c.TIME) || //If user has not typed all characters...
			((this.state.counter < this.state.phrase.length - 1 && this.state.gameType == util.c.PHRASE))){  
	  this.compareInput(e.target.value);   //Compare if current letter is equal to input
	}
	else if ((this.state.timer > 0) && (this.state.gameType == util.c.TIME)){ //if timer is still running and this is time trial...
	  this.updatePhrase();  // change current phrase
	}
	else{	//Display Results for phrase mode
	  this.compareInput(e.target.value);
	  this.sendResults();
	}
  }

  updatePhrase(){
	this.setState({
	  phrase: this.props.phrase,
	  originalPhrase: this.props.phrase,
	  phraseTextField: "",
	  counter: 0});
	  this.props.playTime();
  }
  
  phraseButtonClick() {
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
	  gameType: util.c.PHRASE,
	  expanded: true,
	  keyEvents: []});	
  }
 
  timeTrialButtonClick() {

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
	  gameType: util.c.TIME,
      expanded: true,
	  timeTrialWasClicked: !this.state.timeTrialWasClicked,
	  keyEvents: []});
  } 
  
  sendResults() {
    console.log('results received');		
	var time = Math.round((Date.now() / 1000) - this.state.startTime);   

    request.post('/api/1/stats/results').send({
	  username: (typeof this.props.username == 'undefined' ? 'anonymous' : this.props.username),	
      results: {
        timeTrial: (this.state.gameType != util.c.PHRASE),
        difficulty: this.props.difficulty ,
        timeOfRun: (Math.round((Date.now() / 1000))),
        keyEvents: this.state.keyEvents
	  }
    })
    .end((err, res) => {
      if(err){
        return console.log(err);
      }

      const data = JSON.parse(res.text);
	
	  this.setState({ 
	    disabledPhraseButton: false,
	    acc: Math.round(data.gamerun.acc),
	    disabledTimeTrialButton: false,
	    disabledTextField: true, 
	    phraseTextField: '',
	    counter: 0, 
		isResults: true,
	    timer: (this.state.gameType == util.c.PHRASE ? time: this.state.timer),
	    wpm: Math.round(data.gamerun.wpm)
	});
	  
	  this.props.updateResults({
		acc:  Math.round(data.gamerun.acc), 
	    keyEvents: this.state.keyEvents,
		wpm: Math.round(data.gamerun.wpm),
		timer: (this.state.gameType == util.c.PHRASE ? time: this.state.timer),
		gameMode: this.state.gameType});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (process.env.BROWSER && process.env.DEBUG) {
      console.log('=== Will Receive Props: Game', nextProps);
    }
  }
  
  
  replaceString(){
	var parts = this.state.phrase.split(/\\*/g);
	
	for (var i = 0; i < parts.length; i++) {
	  if(parts[i] == "*") // marks characters as red 
	  {
	    if(this.state.originalPhrase[i] == " "){
		  parts[i] = <span className="match" style={backgroundRed} key={i}>{this.state.originalPhrase[i]}</span>;   	   
		}	
	    else{
	      parts[i] = <span className="match" style={styleRed} key={i}>{this.state.originalPhrase[i]}</span>;	  
	    }   
	  }
	  else{  	
		parts[i] = <span>{parts[i]}</span>;	
      }
	}
	return <div>{parts}</div>;
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

					<h3>{this.replaceString()}</h3>
    				<TextField
    					name="phraseTextField"
    					floatingLabelText="Type Here"
    					disabled={this.state.disabledTextField}
    					value={this.state.phraseTextField}
    					onChange={this.update}
						fullWidth={true}
    				/>

    				{this.state.isResults ? <Results acc={this.state.acc} originalPhrase={this.state.originalPhrase} wpm={this.state.wpm} timer={this.state.timer} />: null}
          </div>
        </CardText>
      </Card>
	</div>
	);
  }
}

export default Game;
