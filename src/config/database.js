module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    database: 'sql-node-sequelize',
    username: 'root',
    password: '123456',
    define: {
        timestamps: true, // Cria na base created_at, updated_at
        underscored: true, // Nome em snake_case
    }
}
