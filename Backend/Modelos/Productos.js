
const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/conexion');
const Productos =  sequelize.define('productos', {
    id:{ 
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: true
    },
    precio:{
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    },
    estado:{
        type: DataTypes.ENUM('Disponible', 'No Disponible'),
        allowNull: false,
        defaultValue: 'Disponible'
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: false
    },
    url_fotografia:{
        type: DataTypes.STRING,
        allowNull: true 
    }
        
        },{
            tableName: 'productos',
            timestamps: false, 
        
        });
    
    module.exports = Productos;