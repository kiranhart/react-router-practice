import Quotelist from '../components/quotes/QuoteList';

const DUMMY_DATA = [
    {id: 'q1', 'author': 'John', text: 'this is the first quote'},
    {id: 'q2', 'author': 'Mike', text: 'this is the second quote'},
    {id: 'q3', 'author': 'MM', text: 'this is the third quote'}
];

const AllQuotes = () => {
    return <Quotelist quotes={DUMMY_DATA} />;
};

export default AllQuotes;
