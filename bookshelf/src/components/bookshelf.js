import React, { Component } from 'react'
import '../css/bookshelf.css';
import Book from './book';
class Bookshelf extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    addBook() {
        this.state.books.push({
            id: Date.now()
        });

        this.setState({
            books: this.state.books
        });
    }
    // deleteBook(id) {
    //     let newBookArray = this.state.books;
    //     newBookArray.map((book, index) => {
    //         if (id === book.id) {
    //             newBookArray.splice(index, 1);
    //         }
    //     });
    //     this.setState({
    //         book: newBookArray
    //     })
    // }

    render() {
        return (
            <div className='div-bookshelf'>
                <div className='row'>
                    {this.state.books.map(book => {
                        return <Book key={book.id} title={book.id} author={book.author} year={book.year} genre={book.genre} />
                    })}
                </div>
            </div>
        )
    }
}


export default Bookshelf;