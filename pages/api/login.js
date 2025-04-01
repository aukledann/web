import pool from "../../src/app/utils/postgres"; 

export default async function handler(req, res) {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
      }
    
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ error: "All fields are required" });
        }
    

        const client = await pool.connect();
        const queryText = `
        SELECT * FROM customer WHERE cust_email = $1 AND cust_password = $2`;

        const values = [email, password];
        const result = await client.query(queryText, values);

        if (result.rows.length > 0) {
            res.status(200).json({ message: "Successful login", data: result.rows[0]});            res.send(result);
          } else {
            res.status(401).json({ error: "Wrong username or password" });
          }

        client.release();
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
      }
  }
  