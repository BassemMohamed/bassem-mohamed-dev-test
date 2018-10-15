const mongoose = require("mongoose");
const Category = require("../models/category");
const Product = require("../models/product");

exports.products_get_all = (req, res, next) => {
    Product.find()
    .populate('category')
    .select("name price image brand category")
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    _id: doc._id,
                    name: doc.name,
                    price: doc.price,
                    image: doc.image,
                    brand: doc.brand,
                    category: doc.category.name
                };
            })
        };
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.products_get_product = (req, res, next) => {
    const key = req.params.key;
    Product.find({ name: { $regex : new RegExp(key, "i") } })
    .populate('category')
    .select("name price image brand category")
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    _id: doc._id,
                    name: doc.name,
                    price: doc.price,
                    image: doc.image,
                    brand: doc.brand,
                    category: doc.category.name
                };
            })
        };
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.products_get_product_by_id = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id).populate('category').exec().then( doc => {
        res.status(200).json(doc);
    }).catch(err => {
        res.status(500).json({
            message: "Could not find product",
            error: err
        })
    });
}

exports.products_add_product = (req, res, next) => {
    const pr = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand
    })

    pr.save().then(result => {
        res.status(201).json({
            message: "Post Request Handled",
            createdProduct: pr
        })
    }).catch(err => {
        res.status(400).json({
            message: "Invalid product",
            error: err
        })
    });
}

exports.products_seed = (req,res,next) => {

    // Droping the Table, Brace for impact.
    Product.collection.drop();

    seedList = require('../products.json');
    seedList.map( (item) => {
        pr = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: item.name,
            image: item.image,
            price: item.price,
            category: item.category,
            brand: item.brand
        });
        return pr.save().then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });;
    });
}