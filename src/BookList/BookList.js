import React, { Component } from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem.js';

class BookList extends Component {
//code breaking at line 12
  onChange(event) {
    let filteredBooks;
    const selectBookType = event.target.value;
    if (event.target.value === "Default") {
      filteredBooks = this.props.books;
    } else {
      filteredBooks = this.props.books.filter(item => item.saleInfo.saleability === selectBookType);
    }
    this.props.filter(filteredBooks); 
  } 

  render() {
    const bookItems = this.props.filtered.map((book, index) => {
      return <li key={index}> <BookItem info={book.volumeInfo} /> </li>
    });

    return (
      <div>
        <fieldset id="eBook">
          <select 
            id="bookPrice"
            onChange= {e => this.onChange(e)}>
            <option value="Default">Select</option>
            <option value="FREE">Free</option>
            <option value="NOT_FOR_SALE">Not For Sale</option>
          </select>
        </fieldset>     
        <ul className="bookList">
          {bookItems}
        </ul>
      </div>
    );
  }
}
export default BookList;
