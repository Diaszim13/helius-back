import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    username: "postgres",
    password: "132465",
    database: "helius-dev",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432
})
