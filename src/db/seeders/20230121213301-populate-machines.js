"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkInsert(
      "machine",
      [
        {
          name: "John Doe",
          type: "TESTE",
          status: "RODANDO",
          location: "PRIMEIRO ANDAR",
          description: "UMA MAQUINA DE TESTE",
          operador_id: 1
        },
        {
          name: "John Doe",
          type: "TESTE",
          status: "RODANDO",
          location: "PRIMEIRO ANDAR",
          description: "UMA MAQUINA DE TESTE",
          operador_id: 1
        },
        {
          name: "John Doe",
          type: "TESTE",
          status: "RODANDO",
          location: "PRIMEIRO ANDAR",
          description: "UMA MAQUINA DE TESTE",
          operador_id: 1

        },
        {
          name: "John Doe",
          type: "TESTE",
          status: "RODANDO",
          location: "PRIMEIRO ANDAR",
          description: "UMA MAQUINA DE TESTE",
          operador_id: 3

        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("machine", null, {});
  },
};
