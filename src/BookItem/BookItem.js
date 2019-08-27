import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {

  render() {
    return (
      <div className="bookItem">
          <h3>Title: {this.props.info.title}</h3>
          <h4>Author: {this.props.info.authors[0]}</h4>
          <p></p>
          <p></p>
          {/*<img src={this.imageLinks.smallThumbnail} alt="Book Thumbnail"></img>*/}
      </div>
    )
  }
}