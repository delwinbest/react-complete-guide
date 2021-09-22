import { useParams } from 'react-router';
import { Route } from 'react-router';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Delwin', text: 'Quote 01' },
  { id: 'q2', author: 'Delwin B', text: 'Quote 02' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found!</p>;
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
