import React from 'react';
import LikeButton from './LikeButton.jsx';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localElBackgroundColor: this.props.ElBackgroundColor || '',
      localContent: this.props.content || '',
    };
    this.handleEditOfElBackgroundColor = this.handleEditOfElBackgroundColor.bind(this);
    this.handleEditOfContent = this.handleEditOfContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDisLikeClick = this.handleDisLikeClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localElBackgroundColor: nextProps.ElBackgroundColor || '',
      localContent: nextProps.content || '',
    });
  }
  handleEditOfElBackgroundColor(e) {
    const newElBackgroundColor = e.target.value;
    this.setState({
      localElBackgroundColor: newElBackgroundColor,
    });
  }
  handleEditOfContent(e) {
    const newContent = e.target.value;
    this.setState({
      localContent: newContent,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      content: this.state.localContent,
    });
    this.setState({ saved: true });
  }

  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }

  handleLikeClick() {
    let localLikeCount = this.props.likeCount;
    localLikeCount += 1;
    this.props.handlePublish({
      likeCount: localLikeCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      content: this.state.localContent,
    });
  }

  handleDisLikeClick() {
    let localLikeCount = this.props.likeCount;
    localLikeCount -= 1;
    this.props.handlePublish({
      likeCount: localLikeCount,
      id: this.props.id,
      ElBackgroundColor: this.state.localElBackgroundColor,
      content: this.state.localContent,
    });
  }

  render() {

      // let divStyle = {
      //   width: '25px',
      //   height: '25px',
      //   display: 'inline-block',
      //   animationName: 'colorLoop',
      //   backgroundColor: this.props.ElBackgroundColor,
      //   animationDuration: '1s',
      //   animationDirection: 'alternate-reverse',
      //   animationIterationCount: 'infinite',
      // }

    return (

      <div className='saved'>
      {/* <div style={divStyle}></div> */}
      <button onClick={this.handleLikeClick} >Like</button>
      <button onClick={this.handleDisLikeClick} >DisLike</button>
      {/* {activeButtons} */}
      <button onClick={this.handleDeleteClick}>x</button>
      <form onSubmit={this.handleSubmit} >
        <input type="text" onChange={this.handleEditOfElBackgroundColor} />
      </form>
      <LikeButton
        ElBackgroundColor={this.props.ElBackgroundColor}
        handleLikeClick={this.handleLikeClick}
        likeCount={this.props.likeCount}
      />

      </div>
    );
  }
}

export default Post;



//on click, this.activebutton window shows up


















//
