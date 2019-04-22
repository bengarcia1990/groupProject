import React, { Component } from 'react'
import '../css/bookshelf.css';
import Book from './book';
class Bookshelf extends Component {
    constructor() {
        super()
        this.state = {
            books: [
                {
                    title: 'Hello',
                    author: 'Frost',
                    year: '1974',
                    genre: 'Horror'
                },
                {
                    title: 'Why',
                    author: 'Hemingway',
                    year: '1950',
                    genre: 'Fantasy'
                },
                {
                    title: 'Sup',
                    author: 'Martin',
                    year: '1992',
                    genre: 'Sports'
                },
            ]
        }
    }


    render() {
        return (
            <div className='div-bookshelf'>
                <div className='row'>
                    {this.state.books.map(book => {
                        return <Book title={book.title} author={book.author} year={book.year} genre={book.genre} />
                    })}
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
                </div>

            </div>
        )
    }


    addBook() {
        this.state.books.push(
            {
                title: "New Book Title",
                author: "New Notes Body",
                year: "New Book Year",
                genre: "New Genre"
            }

        );

        this.setState(
            {
                books: this.state.books
            }
        )
    }



}


export default Bookshelf;