import React, { Component } from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem.js';

class BookList extends Component {
//code breaking at line 12
  onChange(event) {
    const selectBookType = event.target.value;
    console.log('original', this.props.books.length);
    const filteredBooks = this.props.books.filter(item => item.saleInfo.saleability === selectBookType);
    console.log(filteredBooks.length);
    this.props.filter(filteredBooks); 
    console.log(this.props);
  } 

  render() {
    const bookItems = this.props.books.map((book, index) => {
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
