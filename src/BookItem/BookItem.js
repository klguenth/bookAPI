import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {

  render() {
    return (
      <div className="bookItem">
          <h3>Title: {this.props.info.title}</h3>
          <h4>Author: {this.props.info.authors}</h4>
          <p>Description: {this.props.info.description}</p>
          <img src={'this.props.info.previewLink'} alt="Book Cover" />
      </div>
    )
  }
}