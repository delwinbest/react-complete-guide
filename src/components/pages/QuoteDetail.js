import { useParams } from 'react-router';
import { Route } from 'react-router';
import Comments from '../comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>QuoteDetail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
