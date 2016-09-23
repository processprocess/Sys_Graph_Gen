import React from 'react';
import ObjectRow from './ObjectRow.jsx';

export default class LikeButton extends React.Component {

  render() {
    console.log(this.props.ElBackgroundColor)
    var lineElements = [];
    for (var i=0; i < this.props.likeCount; i++) {
        lineElements.push(<ObjectRow key={i} ElBackgroundColor={this.props.ElBackgroundColor}/>);
    }

    return (
      // <div>
      <div className="theLines">
      {/* <div className="like-button"> */}
        {/* <button onClick={this.props.handleLikeClick} >Like</button> */}
        <p>{this.props.likeCount}</p>
        {/* <ObjectRow /> */}
        {lineElements}
      </div>
    );
  }
}
