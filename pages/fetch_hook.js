import React, { useEffect, useState } from 'react';


const fetchHook = (url) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //to track if data still loading
  const [error, setError] = useState(null);
  //if data is not loaded, message loaded appers

  useEffect(() => {
    const fetchData = async () => { // data fetching is async
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        const data = await res.json();
        setProducts(data); // set product state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);// stop loading, data is ready or it was an error
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
}

export default fetchHook;