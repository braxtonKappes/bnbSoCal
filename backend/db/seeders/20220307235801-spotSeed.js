'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Spots', [{
        userId: '1',
        address: '5828 Olson Fall',
        city: 'San Diego',
        state: 'California',
        country: 'United States',
        name: 'Condo Steps',
        price: '133.00',
        createdAt: 'Wed Jun 24 2020',
        updatedAt: 'Mon Jan 31 2022'
      } ,
      {
        userId: '3',
        address: '80021 Berge Mountains',
        city: 'Irvine',
        state: 'California',
        country: 'United States',
        name: 'Elegant Home with Peaceful Relaxing Master Suite',
        price: '270.00',
        createdAt: 'Sun Mar 07 2021',
        updatedAt: 'Mon Mar 14 2022'
      } ,
      {
        userId: '5',
        address: '9122 Flatley Loop',
        city: 'Huntington Beach',
        state: 'California',
        country: 'United States',
        name: 'Charming Studio Steps From The Beach',
        price: '165.00',
        createdAt: 'Sat Oct 06 2018',
        updatedAt: 'Sat Mar 12 2022'
      } ,
      {
        userId: '4',
        address: '061 Hamill Mountains',
        city: 'Laguna Beach',
        state: 'California',
        country: 'United States',
        name: 'Three Bedroom, Upgraded Ocean Villa',
        price: '100.00',
        createdAt: 'Tue Oct 17 2017',
        updatedAt: 'Thu Jan 06 2022'
      } ,
      {
        userId: '1',
        address: '140 Lisa Spring',
        city: 'Anaheim',
        state: 'California',
        country: 'United States',
        name: 'The Vacation Cottage',
        price: '85.00',
        createdAt: 'Mon Dec 14 2015',
        updatedAt: 'Sat Jan 08 2022'
      } ,
      {
        userId: '2',
        address: '527 Keith Loaf',
        city: 'Newport Beach',
        state: 'California',
        country: 'United States',
        name: 'Indoor/Outdoor Living with Stackable Doors',
        price: '221.00',
        createdAt: 'Sat Jun 27 2020',
        updatedAt: 'Sun Jan 02 2022'
      } ,
      {
        userId: '13',
        address: '20140 Jay Estate',
        city: 'Costa Mesa',
        state: 'California',
        country: 'United States',
        name: 'Hip, Private, Popular Bed & Bath',
        price: '150.00',
        createdAt: 'Mon Jun 19 2017',
        updatedAt: 'Tue Mar 01 2022'
      } ,
      {
        userId: '15',
        address: '2026 Lizzie Run',
        city: 'Lake Forest',
        state: 'California',
        country: 'United States',
        name: 'Private Socal Studio close to Beaches/Disneyland',
        price: '158.00',
        createdAt: 'Fri Apr 10 2020',
        updatedAt: 'Wed Feb 23 2022'
      } ,
      {
        userId: '5',
        address: '1068 Augusta Villages',
        city: 'Seal Beach',
        state: 'California',
        country: 'United States',
        name: 'Beach Condo',
        price: '120.00',
        createdAt: 'Fri Nov 19 2021',
        updatedAt: 'Tue Mar 01 2022'
      } ,
      {
        userId: '9',
        address: '581 Metz Valleys',
        city: 'Burbank',
        state: 'California',
        country: 'United States',
        name: 'Fully Loaded 2 Bedroom House',
        price: '228.00',
        createdAt: 'Sun Dec 27 2015',
        updatedAt: 'Wed Mar 09 2022'
      } ,
      {
        userId: '4',
        address: '6274 Cole Gateway',
        city: 'Newport Beach',
        state: 'California',
        country: 'United States',
        name: 'Luxurious Home With Hot Tub',
        price: '391.00',
        createdAt: 'Sun Apr 25 2021',
        updatedAt: 'Thu Jan 20 2022'
      } ,
      {
        userId: '7',
        address: '2977 Eileen Pass',
        city: 'Burbank',
        state: 'California',
        country: 'United States',
        name: 'Charming Poolside Guest House',
        price: '218.00',
        createdAt: 'Wed Jun 24 2015',
        updatedAt: 'Wed Feb 16 2022'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Spots', null, {});

  }
};
