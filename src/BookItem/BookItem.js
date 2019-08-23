import React from 'react';
import './BookItem.css';
//does this need to be class or a function?
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
  {/*        <h3>Title: {props.items.title}</h3>
          <h4>Author: {props.items.authors}</h4>
          <p>{props.saleInfo.isEbook}</p>
          <p>{props.items.description}</p>
          <img src={props.items.imageLinks.smallThumbnail} alt="Book Thumbnail"></img>*/}
          <h4>Book Item</h4>
      </div>
    ) 
  }
}