import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TitleSearch = () => {
  const [error, setError] = useState(null);
  const { affurl } = useParams();

  // Handle redirection and potential errors
  try {
    window.location.href = decodeURIComponent(affurl);
  } catch (err) {
    setError(err.message || 'An unexpected error occurred.');
  }

  return (
    <div>
      {error ? (
        <p className="error-message">Error redirecting: {error}</p>
      ) : (
        <p className="redirection-message">Redirecting to: {decodeURIComponent(affurl)}</p>
      )}
    </div>
  );
};

export default TitleSearch;
