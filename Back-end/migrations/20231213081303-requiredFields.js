'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("Articles", "title",{
      type : Sequelize.STRING,
      allowNull: false, 
    });
    await queryInterface.changeColumn("Articles", "category",{
      type : Sequelize.STRING,
      allowNull: false, 
    });    await queryInterface.changeColumn("Articles", "body",{
      type : Sequelize.STRING,
      allowNull: false, 
    });    await queryInterface.changeColumn("Articles", "author",{
      type : Sequelize.STRING,
      allowNull: false, 
    });    await queryInterface.changeColumn("Articles", "image",{
      type : Sequelize.STRING,
      allowNull: false, 
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
