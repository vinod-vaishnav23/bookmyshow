require('dotenv').config();

const express = require('express');
const connectDB = require('./utils/db_connect');
const userRoutes = require('./routes/userRoute');
const movieRoutes = require('./routes/movieRoute');

try {
    connectDB(process.env.DB_NAME);

    const app = express();

    app.use('/doc', express.static('public'));

    app.use(express.json());

    app.get('/', async (req, res) => {
        // const productModel = mongoose.model("products", productSchema);
        // const response = await productModel.find({})
        // console.log("Data: ", response);
        res.send("Bookmyshow server...");
    });

    app.use('/api/movies', movieRoutes);
    app.use('/api/user', userRoutes);



    app.listen(process.env.PORT, () => {
        console.log(process.env);
        console.log('Server is up and listening at port: ', process.env.PORT);
    });

} catch (err) {
    console.log(err);
}

