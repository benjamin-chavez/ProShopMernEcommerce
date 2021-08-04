// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/erorrMiddlerware.js';
import connectDB from './config/db.js';
// import products from './data/products.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API us running....');
});

app.use('/api/products', productRoutes);
// The following 2 requests were moved to productRoutes.js
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((product) => product._id === req.params.id);
//   res.json(product);
// });

// Calling middleware
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
