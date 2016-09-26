import React from 'react';
import ObjectRow from './ObjectRow.jsx';

export default class LineButton extends React.Component {

  render() {
    // console.log(this.props.ElBackgroundColor)
    var LineElements = [];
    for (var i=0; i < this.props.LineCount; i++) {
        LineElements.push(
          <ObjectRow
            key={i}
            ElBackgroundColor={this.props.ElBackgroundColor}
            ElBorderWidth={this.props.ElBorderWidth}
            LineCount={this.props.LineCount}
          />);
    }


    let rotateAnimation = document.styleSheets[document.styleSheets.length - 1];
        rotateAnimation.insertRule(
        "@keyframes " + 'rotateAnimation' +
        " { 0% {transform:rotate(0deg);} 100% {transform:rotate(360deg);} }",0 );

    let divStyle = {
      animationName: 'rotateAnimation',
      animationDuration: this.props.ElAnimationDuration + 's',
      // animationDuration: '20s',
      // animationDirection: 'linear',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    }

    return (
      <div className="theLines">
        <p>{this.props.LineCount}</p>
        <div style={divStyle}>
          {LineElements}
        </div>



      </div>
    );
  }
}
