import { createStore } from 'redux';
import addStone from './redux-actions/add-stone';

const initialState = {
  cells: Array.from(Array(19 * 19)).map(() => 'n'),
};

const persistState = initialState;

const rootReducer = (state = persistState, action) => {
  switch (action.type) {
    case addStone.type:
      return addStone.reducer(state, action);
    default:
      return state;
  }
};

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState(), 'Updatet state');
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
