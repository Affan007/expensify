import React from 'react'
import moment from'moment';
import{SingleDatePicker} from 'react-dates'
import "react-dates/lib/css/_datepicker.css"
export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      description:props.expense ? props.expense.description:'',
      note:props.expense ? props.expense.note:'',
      amount:props.expense ? (props.expense.amount/100).toString():'',
      createdAt:props.expense ? moment(props.expense.createdAt):moment(),
      calenderFocused:false,
      error:""
    };
  }
  onDescriptionChange=(e) =>{
    const description=e.target.value;
    this.setState(()=>({description}))
  }
  onNoteChange=(e)=>{
    const note=e.target.value;
    this.setState(()=>({note}))
  }
  onAmountChange=(e)=>{
    const amount=e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(()=>({amount}))
    }
  }
  onDateChange=(createdAt)=>{
    if(createdAt){
      this.setState(()=>({createdAt}))
    }
  }
  onFocousChange=({focused})=>{
    this.setState(()=>({calenderFocused:focused}))
  }
  onSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.amount || !this.state.description){
      this.setState(()=>({error:"please add amount and description"}))
    }
    else{
        this.setState(()=>({error:""}))
      this.props.onSubmit({
        description:this.state.description,
        amount:parseFloat(this.state.amount,10)*100,
        createdAt:this.state.createdAt.valueOf(),
        note:this.state.note
      });
    }
  }

render(){
  return(
    <div>
      {this.state.error &&<p>this.state.error </p>}
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add Discription"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
        date={this.state.createdAt}
        onDateChange={this.onDateChange}
        focused={this.state.calenderFocused}
        onFocusChange={this.onFocousChange}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        />
        <textarea
        placeholder="Add a note for your Expense (optional)"
        value={this.state.note}
        onChange={this.onNoteChange}
        >
        </textarea>
        <button>Add Expense</button>
      </form>
    </div>
  )
}
}
