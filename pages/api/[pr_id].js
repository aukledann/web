import pool from "../../src/app/utils/postgres"; 

export default async function handler(req, res) {

   let {pr_id} = req.query;

   if (!pr_id) {
    console.error("No such id");
    return res.status(400).json({ error: "Product id required" });
  }
    
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM product WHERE prod_id = $1',[pr_id]);
    const data = result.rows;
    client.release();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}