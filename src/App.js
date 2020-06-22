import React from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import { Link } from "react-router-dom";

import BooksList from "./Components/BooksList";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((data) => {
      this.setState({ books: data });
      console.log(this.state.books);
    });
  }

  toUpdate = (changedBook, shelf) => {
    update(changedBook, shelf).then((res) => {
      changedBook.shelf = shelf;
      this.setState((previousState) => ({
        books: previousState.books
          .filter((book) => book.id !== changedBook.id)
          .concat(changedBook),
      }));
    });
  };

  render() {
    const books = this.state.books;
    const CRbooks = [];
    const Rbooks = [];
    const WTRbooks = [];
    books.forEach((book) => {
      if (book.shelf === "currentlyReading") {
        CRbooks.push(book);
      } else if (book.shelf === "read") {
        Rbooks.push(book);
      } else {
        WTRbooks.push(book);
      }
    });

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <BooksList
            booksSet="Currently Reading"
            toUpdate={this.toUpdate}
            books={CRbooks}
          />
          <BooksList booksSet="Read" toUpdate={this.toUpdate} books={Rbooks} />
          <BooksList
            booksSet="Want To Read"
            toUpdate={this.toUpdate}
            books={WTRbooks}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button />
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksApp;
