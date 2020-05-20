import React, {useState, useEffect} from 'react';

export default props => {
    const {initialFullName, initialQuotes, onCancelProp, onSubmitProp} = props;
    const [fullName, setFullName] = useState(initialFullName);
    const [quotes, setQuotes] = useState(initialQuotes);
    const [quoteText, setQuoteText] = useState("");

    const addQuote = e => {
        setQuotes(quotes? [...quotes, quoteText]: [quoteText]);
    };

    const deleteQuote = idx => {
        setQuotes( quotes.filter(quote => quotes.indexOf(quote) !== idx))
    };

    const onCancelHandler = e => {
        onCancelProp();
    };

    const onSubmitHandler = e => {
        onSubmitProp({fullName, quotes});

    };
    return (
        <div className="row justify-content-center m-4">
            <div className="col-sm-6 border rounded p-4">
                {/* Author's Name */}
                <div className="row justify-content-center pt-2">
                    <div className="col-12 text-left py-1">
                        <label htmlFor="fullName">Name:</label>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-12 text-left py-1">
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control"/>
                    </div>
                </div>
                {/* Add a Quote for this author */}
                <div className="row justify-content-center pt-4">
                    <div className="col-12 text-left py-1">
                        <label htmlFor="quoteText">Add a new quote for this author:</label>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-12 text-left py-1">
                        <textarea onChange={(e) => setQuoteText(e.target.value)} className="form-control"/>
                    </div>
                </div>
                <div className="row-col justify-content-md-center pt-1 text-right ">
                    <button onClick={ addQuote } className="btn btn-outline-warning btn-sm">Add Quote</button>
                </div>

                {/* Existing Quotes */}
                <div className="row justify-content-center pt-2">
                    <div className="col-12 text-left py-1">
                        <h5>Existing Quotes:</h5>
                        {quotes ?
                            quotes.map((quote, idx) => 
                                <li key={idx}>
                                    {quote} &nbsp; <button onClick={ (e) => {deleteQuote(idx)} } className="btn btn-sm text-primary">Delete</button>
                                </li>) 
                            : <li>None</li>
                        }
                    </div>
                </div>
                {/* Cancel and Submit Buttons */}
                <div className="row justify-content-md-center pt-5">
                    <div className="col-6 text-left py-1">
                        <button onClick={ onCancelHandler } className="btn btn-outline-danger">Cancel</button>
                    </div>
                    <div className="col-6 text-right py-1">
                        <button onClick={ onSubmitHandler } className="btn btn-outline-info">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}