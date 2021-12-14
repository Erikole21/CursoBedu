const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

//get
router.get('/', permission('client', 'admin'), async (req, res) => {
    const orders = await sequelize.models.orders.findAndCountAll();
    return res.status(200).json({ data: orders });
});


// create
router.post('/', permission('client', 'admin'), async (req, res) => {
    const { body } = req;
    const order = await sequelize.models.orders.create({
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity
    });
    await order.save();
    return res.status(201).json({ data: order })
});

//update
router.put('/:id', permission('client', 'admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const order = await sequelize.models.orders.findByPk(id);
    if (!order) {
        return res.status(404).json({ code: 404, message: 'Order not found' });
    }
    const updatedOrder = await order.update({
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity
    });
    return res.json({ data: updatedOrder });
});

//delete
router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const order = await sequelize.models.orders.findByPk(id);
    if (!order) {
        return res.status(404).json({ code: 404, message: 'Order not found' });
    }
    await order.destroy();
    return res.json();
});


module.exports = router;