import React, { Component } from 'react'
import '../css/bookshelf.css';
import Book from './book';

class Bookshelf extends Component {

    render() {
        return (
            <div className='div-bookshelf'>
                <div className='row'>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </div>
                <div className='row'>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </div>
                <div className='row'>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </div>
                <div className='row'>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </div>

                <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
            </div>
        )
    }

    addBook() {
        this.state.book.push(
            {
                title: "New Book Title",
                author: "New Notes Body",
                year: "New Book Year",
                genre: "New Genre"
            }

        );
        this.setState(
            {
                book: this.state.book
            }
        )
    }


}

export default Bookshelf;