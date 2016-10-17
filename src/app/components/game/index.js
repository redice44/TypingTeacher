import React from 'react';
import { Link } from 'react-router';
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
			phrase : 'Phrase to be typed',
			phraseTextField: '',
			typos: 0,
			counter: 0
		 }
     this.update = this.update.bind(this);
    };

	update(e){
		//If user has not typed all characters...
		if(this.state.counter < this.state.phrase.length){
			var inputChar = e.target.value.substring(this.state.counter,this.state.counter + 1);
			var currentChar = this.state.phrase.substring(this.state.counter,this.state.counter + 1);
			
			//Compare user input 
			if(inputChar != currentChar){
				var input = this.state.phrase.slice(0, this.state.counter) + '*' + this.state.phrase.slice(this.state.counter + 1, this.state.phrase.length);
				this.setState({phraseTextField: e.target.value, phrase: input, counter: this.state.counter + 1});
			}
			else{
				this.setState({phraseTextField: e.target.value, counter: this.state.counter + 1});
			}
		}	
	}


	render(){
		return ( <Paper zDepth={1}>
				   <RaisedButton
				     label='Phrase Mode'
					 style={style}
					 primary={true}
                   />

				   <RaisedButton
				     label='Time Trial Mode'
					 style={style} primary={true}
				   />

				   <p>{this.state.phrase}</p>
				   <p>Counter: {this.state.counter}</p>

				   <TextField
				     name="phraseTextField"
				     floatingLabelText="Type Here"
				     value={this.state.phraseTextField}
					 onChange={this.update}
				   />
				   <br />
                   <Link to='/dashboard'>Dashboard Link</Link>
                 </Paper>
				);
			}
}

export default Game;
