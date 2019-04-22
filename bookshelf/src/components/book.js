import React, { Component } from 'react';
import '../css/book.css';

class Book extends Component {

    componentWillMount() {
        this.setState({
            books: [
                {
                    title: this.props.title,
                    author: this.props.author,
                    year: this.props.year,
                    genre: this.props.genre,
                    editMode: false
                }
            ]
        })
    }

    handleEdit() {
        this.setState({
            editMode: true
        });
    }

    handleSave() {
        this.setState({
            title: this.refs.titleContent.value,
            author: this.refs.authorContent.value,
            year: this.refs.yearContent.value,
            genre: this.refs.genreContent.value,
            editMode: false

        });
    }


    render() {

        let titleElement, authorElement, yearElement, genreElement; buttonArea
        if (this.state.editMode) {
            titleElement = (<textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}></textarea>)

            authorElement = (<textarea ref="authorContent" className="author-textarea" defaultValue={this.state.author}></textarea>)

            yearElement = (<textarea ref="yearContent" className="year-textarea" defaultValue={this.state.year}></textarea>)

            genreElement = (<textarea ref="genreContent" className="genre-textarea" defaultValue={this.state.genre}></textarea>)

            buttonArea = (
                <div>
                  <button className='btn btn-info' onClick={this.handleSave.bind(this)}>
                    Save
                  </button>
                </div>
              )

        }
        else {
            titleElement = <h4>{this.state.title}</h4>
            authorElement = <h5>{this.state.author}</h5>
            yearElement = <h5>{this.state.year}</h5>
            genreElement = <h5>{this.state.genre}</h5>
            buttonArea = (
                <div>
                  <button
                    className='btn btn-warning'
                    onClick={this.handleEdit.bind(this)}
                  >
                    Edit
                  </button>
        
                  <button
                    className='btn btn-danger'
                    onClick={this.handleDelete.bind(this)}
                  >
                    Delete
                  </button>
                </div>
              )
        }


        return (
            <div className='col-sm-4'>
                <div className='card card-view'>
                    <div className='card-body'>
                        {titleElement}
                        {authorElement}
                        {yearElement}
                        {genreElement}
                        {buttonArea}
                    </div>

                </div>
            </div>
        )
    }

}

Book.defaultProps = {
    title: 'Title',
    author: 'Author',
    year: 'Year',
    genre: 'Genre'
};
export default Book;