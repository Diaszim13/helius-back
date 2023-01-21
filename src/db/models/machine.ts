import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import  UserModel  from '../models/user';

export default class MachineModel extends Model {

}

MachineModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

}, { tableName: "machine", timestamps: false, sequelize}) //aqui a variavel sequelize de configuraçao do banco é a mesma entao pode passar assim

MachineModel.belongsTo(UserModel, {
    constraints: true,
    foreignKey: 'operador_id'
})

