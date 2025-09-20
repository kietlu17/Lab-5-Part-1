require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


const connectDB = require('./database/database');
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = process.env.PORT || 3000;


// connect DB
connectDB(process.env.MONGODB_URI || 'mongodb://localhost:27017/mvc_crud');


// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// routes
app.get('/', (req, res) => res.redirect('/suppliers'));
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);


// 404
app.use((req, res) => res.status(404).send('Not Found'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));