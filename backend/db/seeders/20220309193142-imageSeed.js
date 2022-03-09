'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Images', [{
        spotId: '1',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-17298163/original/9677c9fe-5208-42c7-8669-891424a59d89.jpeg?im_w=720',
        createdAt: 'Wed May 13 2020',
        updatedAt: 'Sun Feb 13 2022'
      } ,
      {
        spotId: '2',
        url: '',
        createdAt: 'Thu Sep 08 2016',
        updatedAt: 'Mon Feb 21 2022'
      } ,
      {
        spotId: '3',
        url: '',
        createdAt: 'Tue Sep 29 2015',
        updatedAt: 'Sat Feb 12 2022'
      } ,
      {
        spotId: '4',
        url: '',
        createdAt: 'Thu Aug 24 2017',
        updatedAt: 'Wed Jan 05 2022'
      } ,
      {
        spotId: '5',
        url: '',
        createdAt: 'Sun Mar 15 2015',
        updatedAt: 'Tue Jan 11 2022'
      } ,
      {
        spotId: '6',
        url: '',
        createdAt: 'Sun Nov 29 2015',
        updatedAt: 'Mon Feb 14 2022'
      } ,
      {
        spotId: '7',
        url: '',
        createdAt: 'Sat Sep 05 2015',
        updatedAt: 'Mon Jan 10 2022'
      } ,
      {
        spotId: '8',
        url: '',
        createdAt: 'Sat Nov 27 2021',
        updatedAt: 'Sun Feb 20 2022'
      } ,
      {
        spotId: '9',
        url: '',
        createdAt: 'Tue Oct 18 2016',
        updatedAt: 'Sat Jan 29 2022'
      } ,
      {
        spotId: '10',
        url: '',
        createdAt: 'Fri Mar 25 2016',
        updatedAt: 'Wed Feb 09 2022'
      } ,
      {
        spotId: '11',
        url: '',
        createdAt: 'Mon Sep 14 2020',
        updatedAt: 'Mon Jan 10 2022'
      } ,
      {
        spotId: '12',
        url: '',
        createdAt: 'Sat Sep 01 2018',
        updatedAt: 'Fri Mar 04 2022'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Images', null, {});

  }
};
