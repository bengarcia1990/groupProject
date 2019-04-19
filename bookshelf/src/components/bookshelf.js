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
            </div>
        )
    }

}

export default Bookshelf;