import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCall = new AbortController();
      fetch(url, { signal: abortCall.signal})
      .then(resp => {
        if (!resp.ok) {
          throw Error('Data can not be fetched');
        } 
        return resp.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Data fetching aborted')
        } else {
          setError(err.message);
        }
      })
    return () => abortCall.abort();
  }, [url])

  return { data, error };
}
 
export default useFetch;