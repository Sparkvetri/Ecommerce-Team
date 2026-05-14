const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const users = require('./data/users');
const products = require('./data/products');
const fashion = require('./data/fashion');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Manually hash passwords for users before inserting
    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        return user;
      })
    );

    const createdUsers = await User.insertMany(hashedUsers);

    const adminUser = createdUsers[0]._id;

    const allProducts = [...products, ...fashion];

    const sampleProducts = allProducts.map((product) => {
      return { ...product, user: adminUser };
    });

    const createdProducts = await Product.insertMany(sampleProducts);

    // Create a sample order for the admin user
    const sampleOrder = new Order({
      user: adminUser,
      orderItems: [
        {
          name: createdProducts[0].name,
          qty: 1,
          image: createdProducts[0].image,
          price: createdProducts[0].price,
          product: createdProducts[0]._id,
        },
        {
          name: createdProducts[1].name,
          qty: 2,
          image: createdProducts[1].image,
          price: createdProducts[1].price,
          product: createdProducts[1]._id,
        }
      ],
      shippingAddress: {
        address: '123 Admin Lane',
        city: 'Tech City',
        postalCode: '12345',
        country: 'USA',
      },
      paymentMethod: 'Credit Card',
      itemsPrice: createdProducts[0].price + (createdProducts[1].price * 2),
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: createdProducts[0].price + (createdProducts[1].price * 2),
      isPaid: true,
      paidAt: Date.now(),
    });

    await sampleOrder.save();

    console.log('Data Imported with Sample Order!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
