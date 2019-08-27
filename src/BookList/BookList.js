import React, { Component } from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem.js';

class BookList extends Component {

  render() {

    const bookItems = this.props.books.map((book, index) => {
      return <li key={index}> <BookItem info={book.volumeInfo} /> </li>
    });

    return (        
      <ul className="bookList">
        {bookItems}
      </ul>
    );
  }
}
export default BookList;
