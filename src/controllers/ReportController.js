const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        // Encontrar todos os usuários com email "@liondev.com.br".
        // Encontrar todos os usuários que moram na "Rua Jardim Europa".
        // Encontrar todos os usuários que possuem "Vuejs".

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@liondev.com.br' // LIKE '%hat'
                }
            },
            include: [
                // Endereços
                { association: 'addresses', where: { street: 'Rua Jardim Europa' } },
                // Tecnologias
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'Vuejs%'
                        }
                    }
                }
            ]
        })

        return res.json(users);
    }
}
