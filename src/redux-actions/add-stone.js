const type = 'ADD_STONE';

const action = cellId  => ({
  type,
  cellId
});

const reducer = (state, action) => {
  let newCells = [ ...state.cells ]
  newCells[action.cellId] = 'w';
  console.log()

  return {
    ...state,
    cells: newCells
  };
};

export default {
  type,
  action,
  reducer
}
