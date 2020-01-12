import React from 'react';
import './App.css';
// import {Container, Row, Col} from 'react-bootstrap';
import DatePicker from 'react-datepicker' // See https://reactdatepicker.com/
import SmartInput from './SmartInput'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {from: new Date('Jan 1, 1900'), to: new Date()};
  }

  setFromDate(date) {
    this.setState({from: date});
  }

  setToDate(date) {
    this.setState({to: date});
  }
  
  render () {

    let speaker = this.state.speaker;
    let onSpeakerChange = this.onSpeakerChange;

    return (
      <div className="searchForm">
        <form onSubmit={this.props.onSubmit}>
          <input placeholder='search a topic, name, or keyword' onChange={this.props.onChange} className="searchInput SearchBar" type='text' name='searchBar' autoComplete='off'>
          </input>
        </form>

        <label htmlFor='from'>from</label>
        <DatePicker
          name='from'
          className='searchInput option'
          showPopperArrow={false}
          selected={this.state.from}
          onChange={date => this.setFromDate(date)}/>

        <label htmlFor='to'>to</label>
        <DatePicker
          name='to'
          className='searchInput option'
          showPopperArrow={false}
          selected={this.state.to}
          onChange={date => this.setToDate(date)}/>

          <br></br>
          <label htmlFor='speaker'>speaker</label> 
          <SmartInput name='speaker'></SmartInput>

          
      </div>
      
    )
  }
}


export default SearchBar;
