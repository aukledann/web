import React, { useEffect, useState } from 'react';
import clothing from './page.css'
import Menu from "../src/app/components/menu/menu.js"
import Link from 'next/link';


function AllProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //to track if data still loading
  const [error, setError] = useState(null);
  //if data is not loaded, message loaded appers

  useEffect(() => {
    const fetchData = async () => { // data fetching is async
      try {
        const res = await fetch('/api/products_all');
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        const data = await res.json();
        setProducts(data); // set product state with fetch
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);// stop loading, data is ready or it was an error
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    

    return (
      <div >
        <Menu />
            <h1 className='clothing-text'>All Products</h1>
            <div className='product-list'>
              {products.map((item) =>(
                <div key={item.prod_id} className='product-each'>
                    <Link href={`/${item.prod_id}`}>
                        <img src={item.prod_img_url} alt="product-img" />
                        <h2>{item.prod_name}</h2>
                        <p>${item.prod_price}</p>
                    </Link>
                </div>
              ))}
            </div>


        </div>
    );
   
}

export default AllProducts;