import React, {Component} from 'react';
import {get, update} from "../BooksAPI";

class CardBook extends Component {
    state = {
        book: this.props.book
    }

    componentDidMount() {
        get(this.state.book.id).then(book => this.setState({book}))
    }

    onSelect = (book, {target}) => {
        update(book, target.value).then(response => console.log(response))
    }

    render() {
        const {imageLinks, title, authors, shelf} = this.state.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 192,
                            backgroundImage: `url(${imageLinks.smallThumbnail})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(e) => this.onSelect(this.props.book, e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors && authors.map(author =>
                        <span key={author}>{author}</span>
                    )}</div>
                </div>
            </li>
        );
    }
}

export default CardBook;
