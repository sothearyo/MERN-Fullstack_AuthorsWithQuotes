import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import QuotesTable from '../components/QuotesTable';

export default () => {

    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <QuotesTable/>
        </div>
    )
}