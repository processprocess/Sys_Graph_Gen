import React from 'react';

// const propTypes = {
  // tagLine: React.PropTypes.string,
// };

export default class ElementOne extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.testMessage}</h2>
        <p>Test from Element One</p>
      </div>
    );
  }
}

// ElementOne.propTypes = propTypes;
