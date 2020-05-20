import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

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
                setNotFoundMsg(
                    <div>
                        <div>We're sorry, but we could not find the author you are looking for.</div>
                        <div>Would you like to add this author to our database?</div>
                        <div><Link to="/new">Add New Author</Link></div>
                    </div>
                );
            })
    },[])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => { console.log(res); navigate(`/author/${id}`); })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr);
            })
    }

    const cancelAction = e => {
        navigate("/");
    }

    return (
        <div>
            <Link to="/">Home</Link>
                <h3 className="pt-5">Edit this author:</h3>
                {loaded && (
                    <AuthorForm
                    initialFullName={author.fullName}
                    initialQuotes={author.quotes}
                    onSubmitProp={updateAuthor}
                    onCancelProp={cancelAction}
                    />
                )}
                {notFoundMsg}
            {errors.map((error, idx) => <div key={idx} className="text-danger">{error}</div>)}
        </div>
    )
}