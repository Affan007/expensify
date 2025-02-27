import React from 'react';
import {connect} from 'react-redux';
import{DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate} from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state={
    calendarFocused:null,

  };
  onDatesChange=({startDate, endDate})=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocuschange=(calendarFocused)=>{
    this.setState(()=>({calendarFocused}))
  }
  render(){
    return(
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e)=>{
          props.dispatch(setTextFilter(e.target.value));
          // console.log(e.target.value)
        }}/>
        <select
        value={this.props.filters.sortBy}
         onChange={(e)=>{
          if(e.target.value==='date'){
            this.props.dispatch(sortByDate(e.target.value));
          }
          else if (e.target.value==='amount'){
            this.props.dispatch(sortByAmount(e.target.value));
          }
          // console.log(e.target.value)
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocuschange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={()=>false}
        />

      </div>
    );
  }
}
const mapStatetoProps=(state)=>{
  return{
    filters:state.filters
  };
};
export default connect(mapStatetoProps)(ExpenseListFilters);
