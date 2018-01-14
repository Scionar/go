import React from 'react';
import BoardCell from './../BoardCell/BoardCell';
import './Board.css';

export default class Board extends React.Component {
  constructor() {
    super();
    this.renderCells = this.renderCells.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
  }

  renderGrid() {
    return (
      <div className="board__grid">
        { Array.from(Array(18 * 18)).map((current, index) => <div key={index} className="board__grid-cell"></div>) }
      </div>
    );
  }

  renderCells() {
    return this.props.cells.map((current, index) => (
      <BoardCell type={current} key={index} index={index} />
    ));
  }

  render() {
    return (
      <div className="board">
        { this.renderGrid() }
        { this.renderCells() }
      </div>
    );
  }
}
