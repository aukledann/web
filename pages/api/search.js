import pool from "../../src/app/utils/postgres"; // Ensure this is the correct path to your pool

export default async function handler(req, res) {
  try {

    const client = await pool.connect();
    const result = await client.query('SELECT * FROM product');
    const data = result.rows;
    console.log('data[0]: ' + data[0]);
    client.release();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}