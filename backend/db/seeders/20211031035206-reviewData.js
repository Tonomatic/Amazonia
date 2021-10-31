'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        productId: 5,
        review: 'This product was fantastic'
      },
      {
        userId: 1,
        productId: 4,
        review: 'Meh, too expensive'
      },
      {
        userId: 2,
        productId: 8,
        review: 'Nice'
      },
      {
        userId: 3,
        productId: 1,
        review: 'This product was ok'
      },
      {
        userId: 1,
        productId: 10,
        review: 'At first, this product was really nice! But now its not too goo!'
      },
      {
        userId: 2,
        productId: 7,
        review: 'This product was not to great to be honest'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
