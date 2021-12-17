const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

//validacion de usuario
router.post('./login', async (req, res) => {
    const { body } = req;

    // Buscar usuario por email
    const user = await sequelize.models.users.findOne({
        where: {
            email: body.email
        }
    });
    // validar si no existe devolver mensaje de acceso invalido
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // validar el password del usario encontrado
    if (!user.validPassword(body.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // crear token de autenticacion
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRETKEY,
        { expiresIn: process.env.JWT_EXPIRESIN }
    );

    // devolver mensaje de autenticacion valida con token 
    return res.json({
        message: 'Authenticated sucessfully',
        token
    });
});

//creacion de usuario
router.post('./signup', async (req, res) => {
    const { body } = req;
    // Buscar usuario por email
    const user = await sequelize.models.users.findOne({
        where: {
            email: body.email
        }
    });
    //si el email del nuevo usuario ya existe devolver mensaje de informacion de email ya registrado
    if (user) {
        return res.status(400).json({ message: 'this email is already registered' });
    }

    // crear el nuevo usuario
    user = await sequelize.models.users.create({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        type: 'client',
        password: body.password
    });

    // guardar el usuario nuevo
    await user.save();

    // delvolver mensaje de creacion de usuario
    return res.json({ message: 'Your account was created sucessfully' });
});

module.exports = router;