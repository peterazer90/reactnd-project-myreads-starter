import React, {Component} from 'react';
import {getAll, update} from "./BooksAPI";
import CardBook from "./Components/CardBook";

class Home extends Component {
    state = {
        books: [],
    }

    componentDidMount() {
        getAll().then(books => this.setState({books}))
    }

    onSelect = (book, {target}) => {
        update(book, target.value).then(response => console.log(response))
    }

    render() {
        const {history} = this.props;
        const {books} = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map(book => book.shelf === "currentlyReading" &&
                                        <CardBook
                                            key={book.id}
                                            book={book}
                                            onSelect={this.onSelect}
                                        />
                                    )}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map(book => book.shelf === "wantToRead" &&
                                        <CardBook
                                            key={book.id}
                                            book={book}
                                            onSelect={this.onSelect}
                                        />
                                    )}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map(book => book.shelf === "read" &&
                                        <CardBook
                                            key={book.id}
                                            book={book}
                                            onSelect={this.onSelect}
                                        />
                                    )}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => history.push('/Search')}>Add a book</button>
                </div>
            </div>
        );
    }
}

export default Home;
