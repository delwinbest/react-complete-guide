import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact component={AllQuotes}></Route>
        <Route path="/quotes/:quoteId" component={QuoteDetail}></Route>
        <Route path="/new-quote" component={NewQuote}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
