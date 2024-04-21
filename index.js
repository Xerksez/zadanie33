const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'postgres', // Nazwa kontenera PostgreSQL w Docker Compose
    database: 'postgres',
    password: 'postgres',
    port: 5433
});

app.get('/data', async (req, res) => {
    const result = await pool.query('SELECT * FROM sample_table');
    res.json(result.rows);
});

app.get('/data/:id', async (req, res) => {
    const result = await pool.query('SELECT * FROM sample_table WHERE id = $1', [parseInt(req.params.id)]);
    res.json(result.rows);
});

app.get('/data/average', async (req, res) => {
    const result = await pool.query('SELECT AVG(number_field) AS average FROM sample_table');
    res.json(result.rows);
});

app.listen(3000, 'localhost', () => {
    console.log('Application listening at localhost:3000');
});
