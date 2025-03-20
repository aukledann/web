import React, { useEffect, useState } from 'react';
import './[name_artist].css'
import Menu from "../../src/app/components/menu/menu.js"
import { useRouter } from 'next/router';

export default function ArtistPage() {

      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true); //to track if data still loading
      const [error, setError] = useState(null);
      //if data is not loaded, message loaded appers

      const router = useRouter();
      const { name_artist } = router.query;

      

      if (name_artist) {
        let name = name_artist.replace("_", " ");
      }
      let name = name_artist.replace("_", " ");
      name = name.charAt(0).toUpperCase()+ name.slice(1);
      const indSecond = name.indexOf(" ") + 1;
      
      let old_name = name.slice(0,indSecond);
      let new_name = name.charAt(indSecond).toUpperCase()+ name.slice(indSecond+1);

      name = old_name + new_name;


    
      useEffect(() => {

        if (!name) return ;

        const fetchData = async () => { // data fetching is async
          try {
            const res = await fetch(`/api/artist/${name}`);
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
      }, [name_artist]);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
        

        return (
          <div >
                <Menu />
                <h1 className='artist-text'>{name}</h1>

                <div className='product-list'>
                  {products.map((item) =>(
                    <div key={item.prod_id} className='product-each'>
                        <img src = {item.prod_img_url} alt="product-img"></img>
                        <h2>{item.prod_name}</h2>
                        <p>{item.prod_price}</p>
                    </div>
                  ))}
                </div>
    
    
            </div>
        );
       
    }