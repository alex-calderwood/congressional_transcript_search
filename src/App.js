import React from 'react';
import SearchBar from './SearchBar'
import {ResultList, RelatedTopics} from './Results'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {'queryText': '', 'result': [], 'paddingTop': '80px', 'relatedTopics': []};

    // Called whenever the user types a new character into the search bar
    this.onChange = (event) => {
      this.setState({'queryText': event.target.value});
    }

    // Function called when user presses 'enter'
    this.onSubmit = (event) => {
      event.preventDefault(); // Don't reload the page
      
      if (this.state.queryText === '') {
        this.setState({'result': []})
        this.setState({'relatedTopics': []})
        return;
      }

      // Mock a transcript query
      let mockDataFile = './data/CREC-2019-03-13-pt1-PgS1829.json'
      fetch(mockDataFile)
        .then((response) => response.json())
        .then((response) => {
          let text = response['text']
          this.setState({'result': text.slice(0, 500)});
        })

      // Mock a topics query
      this.state.relatedTopics = this.getRelatedTopics(this.state.queryText)
    }
  }

  getRelatedTopics(query) {
    // Mock a topic query
    // let mockTopics = './data/topics.txt'
    return ['President', 'Trump', 'Russia', 'Ukraine', 'Iran'];
  }

   render () {
    let fontSize = this.state.result.length > 0 ? '22px' : '44px' 
    let padding = this.state.result.length > 0 ? '20px' : '100px';
    let results = this.state.result.length > 0 ? [this.state.result, this.state.result] : []

      return (
        <div className="App">
          <header style={{fontSize: fontSize, paddingTop: padding, paddingBottom: padding}}>
            <span className="subtitle">THE WALL STREET JOURNAL</span><br/>
            Congressional Record Transcript Search 
          </header>

          <SearchBar onSubmit={this.onSubmit} onChange={this.onChange}/>
          <RelatedTopics query={this.state.queryText} relatedTopics={this.state.relatedTopics}/>
          <ResultList query={this.state.queryText} results={results}/>
          
        </div>
      )
    };
}

export default App;
