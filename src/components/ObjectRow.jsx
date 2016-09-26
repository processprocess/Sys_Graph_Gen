import React from 'react';

export default class ObjectRow extends React.Component {

  render() {



    let divStyle = {
      width: '100%',
      display: 'inline-block',
      borderStyle: 'solid',
      // ElBorderWidth: this.props.ElBorderWidth + 'px',
      borderColor: this.props.ElBackgroundColor,
      borderWidth: this.props.ElBorderWidth + 'px',
    }

    return (
      <div style={divStyle}>
      </div>
    );
  };
}
