const INCREMENT = "INCREMENT";

function increment() {
  return {
    type: INCREMENT,
  };
}

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}
const store = Redux.createStore(reducer);

function updateUI() {
  const countElement = document.getElementById("count");
  countElement.textContent = store.getState().count;
}
function handleIncrement() {
  store.dispatch(increment());
}
updateUI();

const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", handleIncrement);

store.subscribe(updateUI);
