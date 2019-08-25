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

  render() {
    return (
      <div className="bookItem">
          <h3>Title: {this.state.title}</h3>
          <h4>Author: {this.state.authors}</h4>
          <p>{this.state.isEbook}</p>
          <p>{this.state.description}</p>
          {/*<img src={this.imageLinks.smallThumbnail} alt="Book Thumbnail"></img>*/}
      </div>
    )
  }
}