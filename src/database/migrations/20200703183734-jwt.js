'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Account', 'jwtVersion', {
      type: DataTypes.INTEGER,
      allowNull: false,
      after:'password',
      defaultValue: 0,
    })  
     
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Account', 'jwtVersion')
  }
};
