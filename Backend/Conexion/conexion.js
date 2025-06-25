const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'Examen2',
    'root',
    '123456',{
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',   
    }
)

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

    module.exports = sequelize;