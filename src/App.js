import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const Quotes = React.lazy(() => import('./pages/Quotes'));
const QuoteDetail= React.lazy(() => import('./pages/QuoteDetail'));
const NewQuote = React.lazy(() => import('./pages/NewQuote')); 
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
    return <Layout>
        <Suspense fallback={
            <div className='centered'>
                <LoadingSpinner />
            </div>
        }>
            <Routes>
                <Route path="/" element={<Navigate replace to="/quotes" />}  />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
                <Route path="/new-quote" element={<NewQuote />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    </Layout>
    ;
};

export default App;
