import pool from "../../../src/app/utils/postgres"; 

export default async function handler(req, res) {

    let { name_artist } = req.query;
    let name = name_artist.replace("_", " ");

    if (!name) {
        console.error("No artist name provided");
        return res.status(400).json({ error: "Artist name is required" });
      }

  try {
    console.log(`Fetching data for artist: [name]`);
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM product WHERE prod_artist=$1",[name_artist]);
    const data = result.rows;
    client.release();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}