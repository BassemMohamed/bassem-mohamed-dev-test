const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../models/product');
const ProductsController = require('../controllers/products');

// Fetching All Products
router.get("/", ProductsController.products_get_all);

// Fetching Products with a search key
router.get("/search/:key", ProductsController.products_get_product);

// Fetching Product with id
router.get("/:id", ProductsController.products_get_product_by_id);

// Adding new product to db
router.post("/", ProductsController.products_add_product);

module.exports = router;