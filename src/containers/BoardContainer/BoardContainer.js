import React from 'react';
import { connect } from 'react-redux';
import Board from './../../components/Board/Board';

class BoardContainer extends React.Component {
  render() {
    return (
      <Board cells={this.props.cells} />
    );
  }
}

const mapStateToProps = state => ({
  cells: state.cells
});

export default connect(mapStateToProps)(BoardContainer);
