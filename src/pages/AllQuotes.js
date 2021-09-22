import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Delwin', text: 'Quote 01' },
  { id: 'q2', author: 'Delwin B', text: 'Quote 02' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
