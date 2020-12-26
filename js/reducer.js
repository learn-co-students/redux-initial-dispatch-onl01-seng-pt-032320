let state

function changeState(state = { count: 0 }, action) {
 
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

dispatch({ type: '@@INIT' }) //meanningless type,no change, page will display 0 cause of this render, as opposed to not displaying anything