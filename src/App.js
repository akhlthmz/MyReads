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
    update(changedBook, shelf).then((res) => (changedBook.shelf = shelf));
    this.setState = (previousState) => ({
      books: previousState.books
        .filter((book) => book.id !== changedBook.id)
        .concat(changedBook),
    });
    console.log(this.state.books);
  };
  render() {
    return (
      <div>
        <h1>MyReads</h1>
        <CurrentlyReading toUpdate={this.toUpdate} books={this.state.books} />
        <Read books={this.state.books} />
        <WTRead books={this.state.books} />
        <Link to="/search">Search</Link>
      </div>
    );
  }
}

export default BooksApp;
