import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class Game  extends React.Component {
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
			var inputChar = e.target.value.substring(this.state.counter,this.state.counter + 1);
			var currentChar = this.state.phrase.substring(this.state.counter,this.state.counter + 1);


			//if(inputChar == currentChar){
			//	input = this.state.phrase.substring(0, this.state.counter) + "!" + this.state.phrase.substring(this.state.counter + 1, this.state.phrase.length() - 1);
			//	this.setState({phraseTextField: e.target.value, phrase: input});
			//}
			//else{
				this.setState({phraseTextField: e.target.value, counter: this.state.counter + 1});
			//}
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
