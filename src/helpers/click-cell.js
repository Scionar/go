import store from '../store';
import addStone from '../redux-actions/add-stone';

export default cellId => {
  store.dispatch(addStone.action(cellId));
}
