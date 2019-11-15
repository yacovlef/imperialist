const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/env.json');
const { User } = require('../models');

const login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
        .then(
            (user) => {
                if (!user) {
                    res.status(401).json({ message: 'Пользователь не существует!' });

                    return;
                }

                const isValid = bcrypt.compareSync(password, user.password);

                if (isValid) {
                    const payload = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role
                    };
                    
                    const token = jwt.sign(payload, jwtSecret);

                    res.json({ token });
                } else {
                    res.status(401).json({ message: 'Неверные учётные данные!' })
                }
            }
        )
        .catch(error => res.status(500).json({ message: error.message }));
};

module.exports = {
    login
}
