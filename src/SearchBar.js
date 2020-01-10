import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import DatePicker from 'react-datepicker' // See https://reactdatepicker.com/


class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {from: new Date('March 4, 1789'), to: new Date()};
  }

  setFromDate(date) {
    this.setState({from: date});
  }

  setToDate(date) {
    this.setState({to: date});
  }
  
  render () {
    return (
      <div className="searchForm">
        <form onSubmit={this.props.onSubmit}>
          <input placeholder='search a topic, name, or keyword' onChange={this.props.onChange} className="searchInput SearchBar" type='text' name='searchBar' autoComplete='off'>
          </input>
        </form>

        <label for='from'>from</label>
        <DatePicker
          name='from'
          className='searchInput option'
          showPopperArrow={false}
          selected={this.state.from}
          onChange={date => this.setFromDate(date)}/>

        <label for='to'>to</label>
        <DatePicker
          name='to'
          className='searchInput option'
          showPopperArrow={false}
          selected={this.state.to}
          onChange={date => this.setToDate(date)}/>

          <label for='speaker'>speaker</label>
          <input className="option searchInput">
            {/* <option selected>Any</option>
            <option>Mr. Lee</option> */}
          </input>
      </div>
      
    )
  }
}

export default SearchBar;
