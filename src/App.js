import React from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import { Link } from "react-router-dom";

import CurrentlyReading from "./Components/CurrentlyReading";
import Read from "./Components/Read";
import WTRead from "./Components/WantToRead";

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
      this.setState = (previousState) => ({
        books: previousState.books
          .filter((book) => book.id !== changedBook.id)
          .concat(changedBook),
      });
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
      <div>
        <h1>MyReads</h1>
        <CurrentlyReading toUpdate={this.toUpdate} books={CRbooks} />
        <Read toUpdate={this.toUpdate} books={Rbooks} />
        <WTRead toUpdate={this.toUpdate} books={WTRbooks} />
        <Link to="/search">Search</Link>
      </div>
    );
  }
}

export default BooksApp;
