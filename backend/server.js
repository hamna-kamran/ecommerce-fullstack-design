const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');  // ✅ Load environment variables
const productRoutes = require('./Routes/productRoute');
const connectDB = require('./Config/db');  // ✅ Import DB connection
const authRoutes = require('./Routes/authRoute');
const cartRoutes = require('./Routes/cartRoutes');

dotenv.config();  // ✅ Call dotenv.config() before anything else
connectDB();      // ✅ Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json());

// Serve static images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API route
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
