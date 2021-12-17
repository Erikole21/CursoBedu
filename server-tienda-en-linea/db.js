const { Sequelize } = require('sequelize');

const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');

const sequelize = new Sequelize('ecommerce-api', 'erik', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

const models = [
  Product,
  Review,
  Order,
  User
];

for (let model of models) {
  model(sequelize);
}

const { products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products);
orders.belongsTo(users);
orders.belongsTo(products);


module.exports = sequelize;