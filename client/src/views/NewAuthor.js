import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const [errors, setErrors] = useState([]);
    const createAuthor = author => {
        console.log(author.quotes);
        axios.post('http://localhost:8000/api/author/new', author)
            .then(response => { 
                console.log(response);
                navigate(`/author/${response.data._id}`);
            })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr);
            });
    }

    const cancelAction = e => {
        navigate("/");
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3 className="pt-5">Add a new author:</h3>
            <AuthorForm 
                initialFullName="" 
                initialQuotes={[]}
                onSubmitProp={createAuthor} 
                onCancelProp={cancelAction}
            />
            {errors.map((error, idx) => <div key={idx} className="text-danger">{error}</div>)}
        </div>
    )
}