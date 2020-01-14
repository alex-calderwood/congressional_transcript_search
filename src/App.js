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
    this.state = {
      inputText: '', 
      query: '', 
      results: [],
      paddingTop: '80px', 
      relatedTopics: [],
      speakerMentions: []
    };

    // Called whenever the user types a new character into the search bar
    this.onChange = (event) => {
      this.setState({'inputText': event.target.value});
    }

    // Function called when user presses 'enter'
    this.onSubmit = (event) => {
      event.preventDefault(); // Don't reload the page

      
      if (this.state.inputText === '') {
        this.setState({'results': []})
        this.setState({'relatedTopics': []})
        this.setState({'speakerMentions': []})
        this.setState({'query': ''})
        return;
      }

      // Mock a topics query, related speakers query
      let newTopics = this.getRelatedTopics(this.state.inputText)
      let speakers = this.getSpeakerMentions(this.state.inputText)
      this.setState({
        'query': this.state.inputText, 
        'relatedTopics': newTopics,
        'speakerMentions': speakers
      })

      // Mock a transcript query
      let mockDataFile = './data/CREC-2019-03-13-pt1-PgS1829.json'
      fetch(mockDataFile)
        .then((response) => response.json())
        .then((json) => {
          // console.log('json', json)
          // let text = response[0]['text'] text.slice(0, 500)
          let maxLength = 500;
          for (let i = 0; i < json.length; i++) {
            if (json[i].text.length > maxLength) {
              json[i].text = json[i].text.slice(0, maxLength) + '...';
            }
          }

          this.setState({'results': json});
        })

    }
  }

  getRelatedTopics(query) {
    // Mock a topic query
    // let mockTopics = './data/topics.txt'
    return ['President', 'Trump', 'Russia', 'Ukraine', 'Iran'];
  }

  getSpeakerMentions(query) {
    // Mock a query to get speakers who mentioned the query text
    return ["Bradley Byrne","Martha Roby","Mike Rogers"]

  }

   render () {
    let fontSize = this.state.results.length > 0 ? '22px' : '44px' 
    let paddingTop = this.state.results.length > 0 ? '20px' : '120px';
    let paddingBottom = this.state.results.length > 0 ? '20px' : '155px';
    let results = this.state.results.length > 0 ? this.state.results : []

      return (
        <div className="App">
          <header style={{fontSize: fontSize, paddingTop: paddingTop, paddingBottom: paddingBottom}}>
            <span className="subtitle">THE WALL STREET JOURNAL</span><br/>
            Congressional Record Transcript Search 
          </header>

          <SearchBar onSubmit={this.onSubmit} onChange={this.onChange}/>
          <RelatedTopics query={this.state.query} relatedTopics={this.state.relatedTopics} speakerMentions={this.state.speakerMentions}/>
          <ResultList query={this.state.inputText} results={results}/>
        </div>
      )
    };
}

export default App;
