import React, { Component } from 'react';
import BookSearch from './BookSearch/BookSearch.js';
import BookList from './BookList/BookList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookFilter: [],
      eBooks: [],
      error: null
    };
  }

  search(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBHF52B7Yen_Pi-IbhbMLVmTx5Chudr2zg&q=${value}`;
    const options = {
      method: 'GET'
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data.items,
          bookFilter: data.items.volumeInfo.categories,
          eBooks: data.items.saleInfo.isEbook,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }

  render() {
    return (
      <div className='App'>
        <BookSearch search={value => this.search(value)} />
        <BookList books={this.state.books}/>
      </div>
    );
  }
}
export default App;
