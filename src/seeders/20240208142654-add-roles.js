'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('RoleS', [
      {
        name: 'Admin Role',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Customer Role',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ,
      {
        name:'AIRLINE_BUSINESS',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
