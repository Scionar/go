import React from 'react';
import clickCell from '../../helpers/click-cell';
import './BoardCell.css';

export default class BoardCell extends React.Component {
  constructor() {
    super();
    this.cellClasses = this.cellClasses.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction() {
    clickCell(this.props.index)
  }

  cellClasses() {
    let classList = ['board-cell'];
    if (this.props.type === 'w') classList.push('board-cell_white');
    if (this.props.type === 'b') classList.push('board-cell_black');
    return classList.join(' ');
  }

  render() {
    return (
      <div className={this.cellClasses()} onClick={this.onClickAction}></div>
    );
  }
}
