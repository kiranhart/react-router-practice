import { Routes, Route, Navigate } from 'react-router-dom';

import Quotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';

import Layout from './components/layout/Layout';

const App = () => {
    return <Layout>
        <Routes>
            <Route path="/" element={<Navigate replace to="/quotes" />}  />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
            <Route path="/new-quote" element={<NewQuote />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Layout>
    ;
};

export default App;
