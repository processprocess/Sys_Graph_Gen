import React from 'react';
import ObjectRow from './ObjectRow.jsx';

export default class LineButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateAnimation: ''
    };
  }

  componentDidMount(){
    this.componentWillReceiveProps()
  }

  componentWillReceiveProps(){
    let styleSheet = document.styleSheets[0];
    let rotateAnimation = `rotateAnimation${Math.round(Math.random() * 100)}`;
    let keyframes =
    `@-webkit-keyframes ${rotateAnimation} {
      0%   {transform:rotate(0deg);}
      100% {transform:rotate(${this.props.RotationDirection}360deg);}
    }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    this.setState({
      rotateAnimation: rotateAnimation
    });
  }

  render() {
    var LineElements = [];
    for (var i=0; i < this.props.LineCount; i++) {
      LineElements.push(
        <ObjectRow
          key={i}
          ElBackgroundColor={this.props.ElBackgroundColor}
          ElBorderWidth={this.props.ElBorderWidth}
          LineCount={this.props.LineCount}
        />
      );
    }

    let divStyle = {
      animationName: this.state.rotateAnimation ,
      animationDuration: this.props.ElAnimationDuration + 's',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      // border: '1px solid red'
    }

    return (
      <div style={divStyle}>
        {LineElements}
      </div>
    );
  }
}








//
