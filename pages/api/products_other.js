import pool from "../../src/app/utils/postgres"; 

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM product WHERE prod_type = $1', ['Other']);
    const data = result.rows;
    client.release();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}