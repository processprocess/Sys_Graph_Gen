import React from 'react';

export default class ObjectRow extends React.Component {

  render() {
    console.log(this.props.ElBackgroundColor)
    let divStyle = {
      width: '100%',
      display: 'inline-block',
      borderStyle: 'solid',
      borderWidth: '10px',
      borderColor: this.props.ElBackgroundColor,
    }

    return (
      <div style={divStyle}>
      </div>
    );
  };
}
