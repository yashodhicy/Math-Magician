import React, { useEffect, useState } from 'react';

const DisplayQuote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const key = 'fCb3KMVToJ4Q0P8eAaLV+Q==IpkebTUvfJUcR64t';

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
      headers: { 'X-Api-Key': key },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <p>
        Error:
        {error}
      </p>
    );
  } else {
    content = (
      <div>
        <p>{quote[0]?.quote}</p>
        <p>
          <span>Author: </span>
          {quote[0]?.author}
        </p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default DisplayQuote;
