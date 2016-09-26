import React from 'react';

export default class ObjectRow extends React.Component {

  render() {
    // console.log(this.props.ElBackgroundColor)


    let rotateAnimation = document.styleSheets[document.styleSheets.length - 1];
        rotateAnimation.insertRule(
        "@keyframes " + 'rotateAnimation' +
        " { 0% {transform:rotate(0deg);} 100% {transform:rotate(360deg);} }",0 );
        // " { 0% {background-color:" + color + ";} 100% {background-color:red;} }",0 );



    let divStyle = {
      animationName: 'rotateAnimation',
      animationDuration: this.props.likeCount + 's',
      // animationDuration: '20s',
      // animationDirection: 'linear',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',

      width: '100%',
      display: 'inline-block',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: this.props.ElBackgroundColor,
    }

    return (
      <div style={divStyle}>
      </div>
    );
  };
}
