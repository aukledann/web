import pool from "../../src/app/utils/postgres"; 

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
      }
    
      try {
        const { name, surname, age, address, phone, email, password } = req.body;

        if (!name || !surname || !age || !address || !phone || !email || !password) {
          return res.status(400).json({ error: "All fields are required" });
        }
    

        const client = await pool.connect();
        const queryText = `
          INSERT INTO customer (cust_name, cust_surname, cust_address, cust_age, cust_phone, cust_email, cust_password)
          VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;

        const values = [name, surname, address, age, phone, email, password];
        const result = await client.query(queryText, values);
        client.release();
    
     
        res.status(200).json({ message: "User registered successfully", data: result.rows[0] });
      } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).json({ error: "Error adding data" });
      }
  }
  