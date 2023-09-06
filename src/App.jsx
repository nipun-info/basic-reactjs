import { Component } from 'react';
import './App.css';
import Book from './component/Book';

class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "Da vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Poulo Coelho" }
    ],
    otherProps: "I am some other Props"
  }

  changeBookState = (newBookName) => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "Da vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  changeWithInputState = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "Da vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  render() {
    return (
      <div className="card">
        <h1>Book List</h1>
        <button onClick={() => this.changeBookState("1984")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
        />

        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "1971")} />
      </div>
    )
  }
}
export default App;
