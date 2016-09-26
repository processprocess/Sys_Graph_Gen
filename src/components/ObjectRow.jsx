import React from 'react';

export default class ObjectRow extends React.Component {

  render() {

    let divStyle = {
      width: '100%',
      display: 'inline-block',
      borderStyle: 'solid',
      borderWidth: this.props.LineCount + 'px',
      borderColor: this.props.ElBackgroundColor,
    }

    return (
      <div style={divStyle}>
      </div>
    );
  };
}
