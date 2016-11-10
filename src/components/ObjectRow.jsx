import React from 'react';

export default class ObjectRow extends React.Component {

  render() {
    let divStyle = {
      width: '100%',
      display: 'inline-block',

      width: '200%',
      left: '-50%',

      height: this.props.ElBorderWidth + 'px',
      backgroundColor: this.props.ElBackgroundColor,

      // borderStyle: 'solid',
      // borderColor: this.props.ElBackgroundColor,
      // borderWidth: this.props.ElBorderWidth + 'px',

      // margin: this.props.ElBorderWidth + 'px',
      // padding: this.props.ElBorderWidth + 'px',
    }
    return (
      <div style={divStyle}>
      </div>
    );
  };
}
