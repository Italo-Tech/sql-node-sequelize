const User = require('../models/User');

module.exports = {
    async getAllUsers(req, res) {
        const users = await User.findAll();

        return res.json(users)
    },
    async createUser(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user)
    },
    async updatedUser(req, res) {
        const { id } = req.params;
        const { name, email } =  req.body;

        const updatedUser = await User.update({
            name,
            email
        }, {
            where: { id },
            returning: true // Retorna o registro atualizado
        })

        if(updatedUser[0] === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json(updatedUser[1][0]);
    },
    async deleteUser(req, res) {
        const { id } = req.params;

        const result = await User.destroy({
            where: { id }
        });

        if (result ===  0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(204).json({ message: 'Compositor deletado com sucesso' });
    },
}
