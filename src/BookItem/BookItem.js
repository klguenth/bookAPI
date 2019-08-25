import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: "",
      price: "",
      description: "",
      url: ""
    };
  }

  titleChanged(title) {
    this.setState({
      title
    });
  }

  authorsChanged(authors) {
    this.setState({
      authors
    });
  }

  priceChanged(price) {
    this.setState({
      price
    });
  }

  descriptionChanged(description) {
    this.setState({
      description
    });
  }

  urlChanged(url) {
    this.setState({
      url
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookInfo = (({title, authors, isEbook, description}) => ({title, authors, isEbook, description}))(this.state);
  }

  render() {
    return (
      <div className="bookItem">
          <h3>Title: onChange={e => this.titleChanged(e.target.value)}</h3>
          <h4>Author: onChange={e => this.authorsChanged(e.target.value)}</h4>
          <p>onChange={e => this.priceChanged(e.target.value)}</p>
          <p>onChange={e => this.descriptionChanged(e.target.value)}</p>
          {/*<img src={this.imageLinks.smallThumbnail} alt="Book Thumbnail"></img>*/}
      </div>
    )
  }
}