import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export default class UserModel extends Model {

}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "users", timestamps: false, sequelize}) //aqui a variavel sequelize de configuraçao do banco é a mesma entao pode passar assim

