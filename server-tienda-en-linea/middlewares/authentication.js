const jwt = require('jsonwebtoken');
const sequelize = require('../db');

// validar autenticacion para acceso
const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    //validar que el usuario con token validado exista
    jwt.verify(authorization, 'secretkey', async (err, decoded) => {
        // si genero error no permitir acceso
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = await sequelize.models.users.findOne({
            where: {
                id: decoded.userId
            }
        });

        next();
    });
};

module.exports = authenticate;