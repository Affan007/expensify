import{createStore} from 'redux';
const incrementCount =({incrementBy =1}={}) =>({
  type:"INCREMENT",
  incrementBy
})

const decrementBy= ({decrementBy = 1}={}) => ({
  type:"DECREMENT",
  decrementBy
});

const Reset =()=>({
  type:"RESET"
})
const set =({count}) => ({
  type:"SET",
  count
})
//reducers are pure functions
//never change state or action in reducers
const countReducer=(state={count:0},action) => {
  switch (action.type) {
    case 'INCREMENT':
    return{
      count:state.count+action.incrementBy
    }
    case 'DECREMENT':
    return{
      count:state.count-action.decrementBy
    }
    case 'SET':
    return{
      count:action.count
    }
    case 'RESET':
      return{
        count:0
      }
    default:
      return state;
  }
}
const store= createStore(countReducer)

const unsubscribe= store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount());

store.dispatch(Reset());
store.dispatch(decrementBy())
store.dispatch(decrementBy({decrementBy:10}));

store.dispatch(set({count:101}));
