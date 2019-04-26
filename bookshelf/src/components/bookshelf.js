import React, { Component } from 'react'
import '../css/bookshelf.css';
import Book from './book';
import Page from './page';
class Bookshelf extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            books: [],
            pagina: []
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

    addPage() {
        this.state.pagina.push({
            id: Date.now()
        });

        this.setState({
            pagina: this.state.pagina
        });
    }

    deleteBook(id) {
        let newBookArray = this.state.books;
        newBookArray.map((book, index) => {
            if (id === book.id) {
                newBookArray.splice(index, 1);
            }
        });
        this.setState({
            book: newBookArray
        })
    }

    deletePage(id) {
        let newPageArray = this.state.pagina;
        newPageArray.map((page, index) => {
            if (id === page.id) {
                newPageArray.splice(index, 1);
            }
        });
        this.setState({
            page: newPageArray
        })
    }

    render() {
        return (

            <div className='div-bookshelf'>
                <div>
                    <div className='row'>
                        <div className='col-md-10 offset-md-1'>
                            <button className='btn btn-success btn-block' onClick={this.addBook.bind(this)}>Add Book to Bookshelf</button>
                        </div>
                    </div>

                    <div className='col-md-10 offset-md-1'>
                        <button className='btn btn-primary btn-block' onClick={this.addPage.bind(this)}>Click Here To See A Page</button>

                        {this.state.pagina.map(blah => {
                            return <Page />
                        })}

                    </div>
                </div>
                <div className='row'>
                    {this.state.books.map(book => {
                        return <Book key={book.id} id={book.id} deleteHandler={this.deleteBook.bind(this)} />

                    })}
                </div>

            </div>
        )
    }
}


export default Bookshelf;