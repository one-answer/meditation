import React from 'react';
import { useQuote } from '../context/QuoteContext';

const Quote = ({ showRefreshButton = false }) => {
  const { currentQuote, refreshQuote } = useQuote();
  
  return (
    <div className="quote-container">
      <p className="quote-text">"{currentQuote}"</p>
      {showRefreshButton && (
        <button className="quote-refresh" onClick={refreshQuote}>
          <span className="refresh-icon">↻</span>
        </button>
      )}
    </div>
  );
};

export default Quote;
