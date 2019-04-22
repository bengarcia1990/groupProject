import React, { Component } from 'react'
import '../css/bookshelf.css';
import Book from './book';
class Bookshelf extends Component {
    // constructor() {
    //     super();
    // }


    render() {
        return (
            <div className='div-bookshelf'>
                <div className='row'>
                    {this.state.book.map(book => {
                        return <Book title={book.title} author={book.author} year={book.year} genre={book.genre} />
                    })}
                </div>
                <div className='form-group'>
                    <input className='form-control' placeholder='Book Name'></input>
                    <input className='form-control' placeholder='Book Author'></input>
                    <input className='form-control' placeholder='Year Published'></input>
                    <input className='form-control' placeholder='Genre'></input>
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