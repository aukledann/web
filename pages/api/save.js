import pool from "../../src/app/utils/postgres"; 

export default async function handler(req, res) {
    if (req.method !== "PUT") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { name, surname, age, address, phone, email, password } = req.body;

        
        if (!email) {
            return res.status(400).json({ error: "Email is required to update the user" });
        }

        const fieldsToUpdate = [];
        const values = [];
        let index = 1;

    
        if (name) {
            fieldsToUpdate.push(`cust_name = $${index++}`);
            values.push(name);
        }
        if (surname) {
            fieldsToUpdate.push(`cust_surname = $${index++}`);
            values.push(surname);
        }
        if (age) {
            fieldsToUpdate.push(`cust_age = $${index++}`);
            values.push(age);
        }
        if (address) {
            fieldsToUpdate.push(`cust_address = $${index++}`);
            values.push(address);
        }
        if (phone) {
            fieldsToUpdate.push(`cust_phone = $${index++}`);
            values.push(phone);
        }
        if (password) {
            fieldsToUpdate.push(`cust_password = $${index++}`);
            values.push(password);
        }

     
        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: "No valid fields provided to update" });
        }

        
        values.push(email);
        const queryText = `
          UPDATE customer
          SET ${fieldsToUpdate.join(', ')}
          WHERE cust_email = $${index}
          RETURNING *;
        `;

        const client = await pool.connect();
        const result = await client.query(queryText, values);
        client.release();

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: result.rows[0] });
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json({ error: "Error updating data" });
    }
}
