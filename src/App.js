import React from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import { Route } from "react-router-dom";

import Search from "./Components/Search";
import HomePage from "./Components/HomePage";

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
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage books={this.state.books} toUpdate={this.toUpdate} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <Search toUpdate={this.toUpdate} />}
        />
      </div>
    );
  }
}

export default BooksApp;
