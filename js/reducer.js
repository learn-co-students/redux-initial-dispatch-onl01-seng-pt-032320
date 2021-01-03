let state; 
//initally undefined

 function changeState(state = { count: 0 }, action) { //default count to 0
 
  switch (action.type) {

    case 'INCREASE_COUNT':
      return { count: state.count + 1 }

    default:
      return state;
  }
}

function dispatch(action){
state = changeState(state, action)
render()
}

function render(){
document.body.textContent = state.count
}

dispatch({ type: '@@INIT' })