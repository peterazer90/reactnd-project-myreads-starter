import React, {Component} from 'react';
import {search} from "./BooksAPI";
import CardBook from "./Components/CardBook";

class Search extends Component {
    state = {
        results: []
    }
    onSearch = ({target}) => {
        if (target.value) search(target.value).then((results) => this.setState({results}));
        else this.setState({results: []});
    }

    render() {
        const {history} = this.props;
        const {results} = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => history.goBack()}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.onSearch} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {results.map(item =>
                            <CardBook
                                key={item.id}
                                book={item}
                            />
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
