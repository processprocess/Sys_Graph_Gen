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
        />);
    }

    let divStyle = {
      animationName: this.state.rotateAnimation ,
      animationDuration: this.props.ElAnimationDuration + 's',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',


      // display: 'inline-block',
      // verticalAlign: 'middle',

      margin: 'auto',
      position: 'absolute',
      width: '200%',
      left: '-50%',
      // top: -this.props.ElBorderWidth + '',
      top: '0',
      bottom: '0',
      height:  '0px',



      // top: '50%',
      // transform: 'translateY(-50%)',
      // paddingTop: '50%',
      // paddingBottom: '-50%',
      // bottom: '300px',
      // z-index: 1,
    }

    return (
      <div style={divStyle}>
        {LineElements}
      </div>
    );
  }
}
