import QuoteForm from '../components/quotes/QuoteForm';
const NewQuote = (params) => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
