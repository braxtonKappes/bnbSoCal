'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Reviews', [{
        userId: '5',
        spotId: '1',
        review: 'Placeat ducimus nam libero in voluptatem quia velit. Consectetur enim natus accusantium quasi dolor pariatur ut amet. Dolor et dolorum alias officia. Voluptatem neque voluptatem laudantium necessitatibus dolor dolor vel voluptatibus reiciendis.',
        rating: 2,
        createdAt: 'Wed May 01 2019',
        updatedAt: 'Tue Feb 01 2022'
      } ,
      {
        userId: '5',
        spotId: '1',
        review: 'Est impedit reprehenderit corrupti blanditiis doloribus molestiae inventore. Et qui esse dolore quis neque quo quibusdam. Voluptatum dolor animi delectus provident mollitia est qui. Ipsa nihil veritatis voluptas eos in non. Ut culpa vitae laborum quae laboriosam temporibus quidem adipisci.',
        rating: 2,
        createdAt: 'Tue Feb 09 2016',
        updatedAt: 'Fri Jan 28 2022'
      } ,
      {
        userId: '5',
        spotId: '2',
        review: 'Aut nobis voluptates. Sint sed ea ullam dolore dolor nam facilis pariatur magnam. Id harum commodi alias iusto. Quibusdam ipsa nesciunt ipsa laboriosam sequi et.',
        rating: 5,
        createdAt: 'Fri Jun 12 2020',
        updatedAt: 'Sat Jan 29 2022'
      } ,
      {
        userId: '5',
        spotId: '2',
        review: 'Necessitatibus ad ad fugiat. Numquam qui consequatur quam accusamus repudiandae quis perspiciatis dolore autem. Eos earum natus molestias aut vel placeat doloremque. Ipsam atque porro totam possimus provident.',
        rating: 1,
        createdAt: 'Thu Apr 26 2018',
        updatedAt: 'Fri Jan 07 2022'
      } ,
      {
        userId: '13',
        spotId: '2',
        review: 'Quae quia natus non totam. Eligendi ratione accusantium. Quo itaque dicta quia. Voluptate molestiae fugit sit voluptas iure laborum.',
        rating: 4,
        createdAt: 'Wed Apr 22 2020',
        updatedAt: 'Fri Feb 18 2022'
      } ,
      {
        userId: '7',
        spotId: '3',
        review: 'Laboriosam ex vel dolorum et consequuntur. Accusamus eum quisquam voluptatem aliquam facilis aut eligendi. Voluptate nisi facilis quaerat itaque. Ad tempore reiciendis illum sapiente et ducimus asperiores. Ex culpa et et culpa porro aut.',
        rating: 5,
        createdAt: 'Fri Mar 16 2018',
        updatedAt: 'Mon Feb 14 2022'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
