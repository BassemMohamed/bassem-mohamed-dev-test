const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products');

// Fetching All Products
router.get("/", ProductsController.products_get_all);

// Fetching Products with a search key
router.get("/search/:key", ProductsController.products_get_product);

// Fetching Product with id
router.get("/:id", ProductsController.products_get_product_by_id);

// Adding new product to db
router.post("/", ProductsController.products_add_product);

// Seeding The Database
router.post("/seed", ProductsController.products_seed);

module.exports = router;