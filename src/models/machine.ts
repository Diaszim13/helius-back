import  {UserModel}  from '@src/models/user';
import {Sequelize, DataTypes} from 'sequelize';

export class MachineModel {
    sequelize = new Sequelize('postgres::memory');
    Machine = this.sequelize.define('machine', {
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
        operador_id: {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'users',
              },
              key: 'id'
            },
          }
    });
}