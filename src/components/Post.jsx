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
    this.isSaved = this.isSaved.bind(this);
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

  // handleChange(e) {
  //   this.setState({
  //     ElBackgroundColor: e.target.value,
  //   });
  // }

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

  isSaved() {
    return this.props.ElBackgroundColor === this.state.localElBackgroundColor &&
           this.props.content === this.state.localContent;
  }
  render() {
    let activeButtons;

    console.log(this.props.ElBackgroundColor)
      activeButtons = (
        <div>
        {/* <div className="active-buttons"> */}
          <button className="deleteButton" onClick={this.handleDeleteClick}>x</button>
          {/* <button className="saveButton" onClick={this.handleSubmit}>save</button> */}
          <LikeButton
            ElBackgroundColor={this.props.ElBackgroundColor}
            handleLikeClick={this.handleLikeClick}
            likeCount={this.props.likeCount}
          />
        </div>
      );

      let divStyle = {
        width: '100px',
        height: '100px',
        display: 'inline-block',
        animationName: 'colorLoop',
        backgroundColor: this.props.ElBackgroundColor,
        animationDuration: '1s',
        animationDirection: 'alternate-reverse',
        animationIterationCount: 'infinite',
      }

    return (

      <div className='saved'>
      <div style={divStyle}></div>
      <form onSubmit={this.handleSubmit} >
        <input type="text" onChange={this.handleEditOfElBackgroundColor} />
        {/* <input type="text" name="ElBackgroundColor"  onChange={this.handleEditOfElBackgroundColor} /> */}
        {/* <input type="text" name="ElBackgroundColor" value={this.state.ElBackgroundColor} onChange={this.handleEditOfElBackgroundColor} /> */}
      </form>


      {/* <div className={this.isSaved() ? 'saved' : 'not-saved'} > */}
        {/* <form className="post-display" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="ElBackgroundColor"
            value={this.state.localElBackgroundColor}
            onChange={this.handleEditOfElBackgroundColor}
          />
          <input
            type="text"
            name="content"
            value={this.state.localContent}
            onChange={this.handleEditOfContent}
          />
          <input type="submit" value="SAVE" className="hidden"/>
        </form> */}
        {activeButtons}
      </div>
    );
  }
}

export default Post;



//on click, this.activebutton window shows up


















//
