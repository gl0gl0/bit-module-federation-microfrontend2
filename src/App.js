import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: '', endDate: ''};
  }

  render() {
    const {startDate, endDate} = this.state;
    return (
      <div className='container'>
        This is app2
      </div>
    );
  }
}
