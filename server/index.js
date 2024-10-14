require('dotenv').config();

const connectDB = require('./utils/db_connect');
const express = require('express');
const app = express();

connectDB(process.env.DB_NAME);

app.use('/doc', express.static('public'));
app.use(express.json());

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true,
        },
        product_price: {
            type: String,
            required: true,
        },
        isInStock: {
            type: Boolean,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

app.get('/', async (req, res) => {
    const productModel = mongoose.model("products", productSchema);
    const response = await productModel.find({})
    console.log("Data: ", response);
    res.send("Hello");
})

app.listen(process.env.PORT, () => {
    console.log(process.env);
    console.log('Server is up and listening at port: ', process.env.PORT);
})