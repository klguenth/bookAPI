import React, { Component } from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem.js';

class BookList extends Component {
  render() {  
    return (
      <div className="bookList">
        <form className="formList">
          <ul>
            <li><BookItem /></li>
            <li><BookItem /></li>
            <li><BookItem /></li>
            <li><BookItem /></li>
            <li><BookItem /></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default BookList;