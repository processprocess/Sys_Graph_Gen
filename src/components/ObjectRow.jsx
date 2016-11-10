import React from 'react';

export default class ObjectRow extends React.Component {

  render() {
    let divStyle = {
      height: this.props.ElBorderWidth + 'px',
      backgroundColor: this.props.ElBackgroundColor,
      marginTop: this.props.ElBorderWidth + 'px',
    }
    return (
      <div style={divStyle}>
      </div>
    );
  };
}
