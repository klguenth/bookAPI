import React, { Component } from 'react';
import BookSearch from './BookSearch/BookSearch.js';
import BookList from './BookList/BookList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filtered: [],
      error: null
    };
    this.handleFilter = this.handleFilter.bind(this)
  }
//function to update state from BookList
  handleFilter(filterValue) {
    this.setState({filtered: filterValue})
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
          filtered: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
//attempted to pass filter function down- not returning proper info
  render() {
    return (
      <div className='App'>
        <BookSearch search={value => this.search(value)} />
        <BookList books={this.state.books} filtered={this.state.filtered} filter={this.handleFilter} />
      </div>
    );
  }
}
export default App;
