import React, { useEffect, useState } from "react";
import Menu from "../src/app/components/menu/menu.js";
import { useRouter } from "next/router";
import './[pr_id].css'

function Pr_Id() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();


  useEffect(() => {
    if (!router.isReady) return; // Wait until the router is ready

    const { pr_id } = router.query;

    console.log("at pages/", pr_id);

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/${pr_id}`);
        if (!res.ok) throw new Error("Error fetching data");
        const data = await res.json();
        setProduct(data[0]);
        console.log("API result:", data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pr_id) fetchData(); // Only fetch if pr_id is valid

  }, [router.isReady]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Menu />
      <div className="product-container">
        {product ? (
          <>

            <div className="product-image">
              <img src={product.prod_img_url} alt={product.prod_name} />
            </div>

            <div className="product-details">
              <h2>{product.prod_name}</h2>
              <p><strong>Artist:</strong> {product.prod_artist}</p>
              <p>{product.prod_info}</p>
              <p><strong>Sizes:</strong> {product.prod_sizes}</p>
              <p><strong>Price:</strong> ${product.prod_price}</p>

              <div className="button-group">
                <button className="btn_add">Add To Bag</button>
                <button className="btn_choose-size">Choose Size</button>
              </div>
            </div>

          </>
        ) : (
          <p>No product data available.</p>
        )}
      </div>
    </div>
  );
}

export default Pr_Id;
