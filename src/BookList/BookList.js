import React, { Component } from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem.js';

class BookList extends Component {
  bookSearchResults(responseJson) {
    $('#bookItem').empty();
    for (let i = 0; i < responseJson.results.length; i++) {
      $('#bookItem').append(
        `<li>
          <h3>${responseJson.results[i].title}</h3>
          <h4>${responseJson.results[i].authors}</h4>
          <p>${responseJson.results[i].price}</p>
          <p>${responseJson.results[i].description}</p>
        </li>`
        );
      }
  }
  render() {
      return (
        <div className="bookList">
          <form className="formList">
            <ul>
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