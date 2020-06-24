import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { search } from "../BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    query: "",
    searchResult: [],
  };

  onchange = (value) => {
    this.setState({
      query: value.trim(),
    });
    if (value !== "") {
      search(value.trim()).then((res) =>
        this.setState({
          searchResult: res,
        })
      );
    } else {
      this.setState({ searchResult: [] });
    }
  };

  render() {
    // console.log(this.state.searchResult);

    let SearchedBooks = this.state.searchResult;
    let HomePageBooks = this.props.books;
    let shelf;
    if (Array.isArray(SearchedBooks)) {
      SearchedBooks.forEach((book) => {
        shelf = "none";
        HomePageBooks.forEach((HpBook) => {
          if (book.id === HpBook.id) {
            shelf = HpBook.shelf;
          }
        });
        book.shelf = shelf;
      });
    }
    // console.log(this.state.query);

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search" />
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search books here"
                  value={this.state.query}
                  onChange={(e) => this.onchange(e.target.value)}
                />
              </div>
            </div>
          </div>

          {Array.isArray(this.state.searchResult) ? (
            <ul className="books-grid">
              {SearchedBooks.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                  toUpdate={this.props.toUpdate}
                  defaultValue={book.shelf}
                />
              ))}
            </ul>
          ) : (
            <div className="message">
              <h3>No match found !!</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  toUpdate: PropTypes.func.isRequired,
};
export default Search;
