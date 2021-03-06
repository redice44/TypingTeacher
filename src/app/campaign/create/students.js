import request from 'superagent';

import React from 'react';
import Autosuggest from 'react-autosuggest'; 
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

import CampaignMap from '../map';
import util from '../constants';
let students = [];
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return students.filter(student => regex.test(student));
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

export default class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      list: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.addStudent = this.addStudent.bind(this);

    request
      .get('/api/1/account/all')
      .end((err, res) => {
        if (err) {
          return console.log(err);
        }

        students = JSON.parse(res.text);
      });
  }

  addStudent() {
    let t = this.state.list;
    // If the student isn't already on the list
    if (!t.find((s) => {
      return s == this.state.value;
    }) && this.state.value != this.props.me
      && this.state.value != "") {
      t.push(this.state.value);
      this.props.getStudents(t);
      this.setState({
        list: t
      });
    }
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Student Name",
      value,
      onChange: this.onChange
    };
    let studentList = [];
    this.state.list.forEach((s, i) => {
      studentList.push(<ListItem key={i} primaryText={s} />);
    });

    return (
      <div>
        <Paper style={{paddingBottom: "20px", paddingLeft: "20px"}}>
          <RaisedButton 
              label='Add'
              style={{marginBottom: "20px", marginTop: "20px"}}
              onTouchTap={() => {
                this.addStudent();
              }}/>
          <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
        </Paper>
        <List>
          {studentList.length > 0 ? 
          <ListItem
            primaryText='Student List' 
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={studentList} /> : null }
        </List>
      </div>
    );
  }
};
