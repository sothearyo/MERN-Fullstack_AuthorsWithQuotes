import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Paper } from '@material-ui/core';


export default props => {
    const { id } = props;
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [notFoundMsg, setNotFoundMsg] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => { 
                setAuthor(res.data); 
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    },[author])

    return (
        <div>
            <div className="row-col">
                <Link to="/">Home</Link>
            </div>
            <div className="row-col">
                <Paper elevation={3} className=" p-5 m-5">
                    {loaded && (
                        <div>
                            <h2 className="pb-4">{author.fullName}</h2>
                            {author.quotes.map((quote, idx) => <p key={idx}>{quote}</p>)}
                        </div>
                    )}
                    
                </Paper>
            </div>
        </div>
    )
}