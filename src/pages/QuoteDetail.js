import React from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_DATA = [
    {id: 'q1', 'author': 'John', text: 'this is the first quote'},
    {id: 'q2', 'author': 'Mike', text: 'this is the second quote'},
    {id: 'q3', 'author': 'MM', text: 'this is the third quote'}
];


const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_DATA.find((q) => q.id === params.quoteId);

    if (!quote)  {
        return <div>Quote not found</div>;
    }

    return <>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Routes>
            <Route path="comments" element={<Comments />} />
            <Route path="" element={
                <div className='centered'>
                    <Link className='btn--flat' to={`comments`}>
                    Load Comments
                    </Link>
                </div>
            } />
        </Routes>
        
    </>;
};

export default QuoteDetail;
