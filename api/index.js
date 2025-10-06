// import express from 'express';
// import postRoutes from './routes/posts';
// import bodyParser from 'body-parser';
// // const express = require('express');
// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());

// app.get('/api', (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


import express from 'express';
import postRoutes from './src/routes/InquiriesPost.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/InquiriesPost', postRoutes);

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server running on http://localhost:${PORT}`);
});
