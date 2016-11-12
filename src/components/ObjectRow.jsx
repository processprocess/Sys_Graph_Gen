import React from 'react';

export default class ObjectRow extends React.Component {

  render() {
    let divStyle = {
      height: this.props.ElBorderWidth + 'px',
      backgroundColor: this.props.ElBackgroundColor,
      marginTop: this.props.ElBorderWidth + 'px',
      // left: '-50%',
      // width: '200%',
    }
    return (
      <div style={divStyle}>
      </div>
    );
  };
}
