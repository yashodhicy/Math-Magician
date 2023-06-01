import axios from 'axios';
import { useEffect, useState } from 'react';

const DisplayQuote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const key = 'fCb3KMVToJ4Q0P8eAaLV+Q==IpkebTUvfJUcR64t';

  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
      headers: { 'X-Api-Key': key },
    })
      .then((resp) => resp.data)
      .then((data) => {
        if (data.error) {
          console.log('Error:', data.error);
        } else {
          setQuote(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error:', error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      )
        : (
          <div>
            <p>
              {quote[0]?.quote}
            </p>
            <p>
              <span>  Author:  </span>
              {quote[0]?.author}
            </p>
          </div>
        )}
    </div>
  );
};

export default DisplayQuote;
