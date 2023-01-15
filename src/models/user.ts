import { Sequelize, DataTypes } from 'sequelize';


export class UserModel {
    sequelize = new Sequelize('postgres::memory');
    User = this.sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        // Timestamps
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
}