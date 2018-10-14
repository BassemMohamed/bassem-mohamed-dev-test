const mongoose = require("mongoose");
const Product = require("../models/product");
const Category = require("../models/category");

exports.products_get_all = (req, res, next) => {
    Product.find()
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
                    // category: getCategory(doc.category)
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
    const id = req.params.key;
    console.log(id);
    Product.find({ name: { $regex : new RegExp(id, "i") } })
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
                    // category: getCategory(doc.category)
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
    Product.findById(id).exec().then( doc => {
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

    if(pr.name && pr.image && pr.brand) {
        pr.save().then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
        res.status(201).json({
            message: "Post Request Handled",
            createdProduct: pr
        })
    } else {
        res.status(400).json({
            message: "Product is not valid",
            Product: pr
        })
    }
}

getCategory = (id) => {
    Category.findById(id)
    .select("name")
    .exec()
    .then(docs => {
        console.log(docs);
        return docs[0].name;
    })
}