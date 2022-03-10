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
        url: 'https://cdn.onekindesign.com/wp-content/uploads/2019/03/Serene-Master-Bedroom-Decorating-Ideas-08-1-Kindesign.jpg',
        createdAt: 'Thu Sep 08 2016',
        updatedAt: 'Mon Feb 21 2022'
      } ,
      {
        spotId: '3',
        url: 'https://a0.muscache.com/pictures/prohost-api/Hosting-51989819/original/e81142c8-499f-441c-97cd-86e6bf00d33d.jpeg',
        createdAt: 'Tue Sep 29 2015',
        updatedAt: 'Sat Feb 12 2022'
      } ,
      {
        spotId: '4',
        url: 'https://media.vrbo.com/lodging/22000000/21680000/21671900/21671877/f27128ee.c10.jpg',
        createdAt: 'Thu Aug 24 2017',
        updatedAt: 'Wed Jan 05 2022'
      } ,
      {
        spotId: '5',
        url: 'https://a0.muscache.com/im/pictures/d3143e94-971c-443f-88b2-24fa1ceae5a1.jpg?im_w=720',
        createdAt: 'Sun Mar 15 2015',
        updatedAt: 'Tue Jan 11 2022'
      } ,
      {
        spotId: '6',
        url: 'https://i.pinimg.com/originals/41/df/d7/41dfd717abb6cbb6a3bea6a126fbd29a.jpg',
        createdAt: 'Sun Nov 29 2015',
        updatedAt: 'Mon Feb 14 2022'
      } ,
      {
        spotId: '7',
        url: 'https://a0.muscache.com/pictures/bcc4e06b-f0ac-46e2-9f82-f47125a3b2d5.jpg',
        createdAt: 'Sat Sep 05 2015',
        updatedAt: 'Mon Jan 10 2022'
      } ,
      {
        spotId: '8',
        url: 'https://a0.muscache.com/im/pictures/ddeff6ce-a866-4963-9781-8319c8f9338b.jpg?aki_policy=large',
        createdAt: 'Sat Nov 27 2021',
        updatedAt: 'Sun Feb 20 2022'
      } ,
      {
        spotId: '9',
        url: 'https://www.myrtlebeach.com/wp-content/uploads/2010/10/condo-world-1.jpg',
        createdAt: 'Tue Oct 18 2016',
        updatedAt: 'Sat Jan 29 2022'
      } ,
      {
        spotId: '10',
        url: 'https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/b785e0876d3612d10240940559bbaad0f72d0978989ecbf5f02321f60be2b4e8.jpg',
        createdAt: 'Fri Mar 25 2016',
        updatedAt: 'Wed Feb 09 2022'
      } ,
      {
        spotId: '11',
        url: 'https://i.pinimg.com/originals/f8/56/26/f85626a95cce4769db9c2163fb24e8cf.jpg',
        createdAt: 'Mon Sep 14 2020',
        updatedAt: 'Mon Jan 10 2022'
      } ,
      {
        spotId: '12',
        url: 'https://media.scurto.net/2014/media/104096-b.jpg',
        createdAt: 'Sat Sep 01 2018',
        updatedAt: 'Fri Mar 04 2022'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Images', null, {});

  }
};
