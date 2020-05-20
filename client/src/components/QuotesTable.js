import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Paper } from '@material-ui/core';

export default props => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
            .then(response => { 
                setAuthors (
                    response.data.authors.sort((a,b) =>
                    (a.fullName > b.fullName )? 1: -1)
                ); 
            })
            .catch(err => console.log(err))
    },[authors]);

    const deleteAuthor = authorId => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res => { setAuthors(authors.filter(author => author._id != authorId))});
    }

    return (
        <div className="container my-5 text-left">

            <Paper elevation={3} className="p-4">
                <h3>We have quotes by:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, idx) => 
                            <tr key={idx}>
                                <td><Link to={`/author/${author._id}`}>{author.fullName}</Link></td>
                                <td>
                                    <button onClick={(e) => navigate(`author/${author._id}/edit`)}className="btn btn-outline-info">Edit</button> &nbsp;
                                    <button onClick={ (e) => deleteAuthor(author._id) } className="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </Paper>
        </div>
    )
}