'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Users', [{
        email: 'Andre_Leuschke27@gmail.com',
        username: 'Colby_Blanda87',
        hashedPassword: '$2a$10$zmP0ALpddS2.sgpd/Bxoiul2fZAPr08tPEh/pIJAWlzv4qG52knRO',
        createdAt: 'Tue Dec 03 2019',
        updatedAt: 'Tue Feb 15 2022'
      } ,
      {
        email: 'Verla.Kuhlman@hotmail.com',
        username: 'Margarette37',
        hashedPassword: '$2a$10$0fiK1SW1dUTr6EpPf73kI.rjPS9BPbineGfIIAryaWDufFocl9Skm',
        createdAt: 'Fri May 01 2020',
        updatedAt: 'Wed Feb 02 2022'
      } ,
      {
        email: 'Marilie_Stamm72@yahoo.com',
        username: 'Uriah41',
        hashedPassword: '$2a$10$8/dj/epNVXodHU2GYPOuUux0q0UcUZYd9KecoKSVxVNWLX9kTzgla',
        createdAt: 'Sun Jun 20 2021',
        updatedAt: 'Thu Mar 03 2022'
      } ,
      {
        email: 'Nya.Pacocha@gmail.com',
        username: 'Kristian.Schaefer',
        hashedPassword: '$2a$10$x2ATB2XiDfBAhW0d8/jky.cwZgOT3lHhMuQb.z8yg9Pdi8W/74uIK',
        createdAt: 'Mon Jan 08 2018',
        updatedAt: 'Wed Mar 02 2022'
      } ,
      {
        email: 'Duane.Lind@yahoo.com',
        username: 'Lisette_Howe',
        hashedPassword: '$2a$10$ho9wnIzU/FAHQ2i5dK5zmevg.9cd3hPM4VECyloiQqTJ3Lfk2oc0K',
        createdAt: 'Sat Aug 08 2020',
        updatedAt: 'Mon Feb 07 2022'
      } ,
      {
        email: 'Emmy.Lueilwitz73@gmail.com',
        username: 'Timmy_Skiles',
        hashedPassword: '$2a$10$WX1Z4LQboVDhATJfW/u6AetKPG4uRQ/l1z9I8XkcPsvIGSmYbCfqm',
        createdAt: 'Wed Dec 30 2015',
        updatedAt: 'Fri Feb 18 2022'
      } ,
      {
        email: 'Magnolia_Grimes@yahoo.com',
        username: 'Lilian9',
        hashedPassword: '$2a$10$pZyJrUTpxyFRDwvgkaww6eMZvkkJAzpyui85OrIAsXZfzS.LX.BOe',
        createdAt: 'Sat Mar 20 2021',
        updatedAt: 'Thu Feb 24 2022'
      } ,
      {
        email: 'Noemy_Glover36@hotmail.com',
        username: 'Neil87',
        hashedPassword: '$2a$10$MN7/lBJ/IdPLs4pnwhlUq.gLdxE2riOkygAxqO58NvVXA/X7MWke.',
        createdAt: 'Thu May 26 2016',
        updatedAt: 'Tue Mar 08 2022'
      } ,
      {
        email: 'Icie.Cruickshank@yahoo.com',
        username: 'Tre.Mosciski',
        hashedPassword: '$2a$10$YqDBBtItM8Ei8GQKlmzW/.e7ELvJcN07XWTNQPHNdR/83YIm7zVD6',
        createdAt: 'Sun Sep 13 2015',
        updatedAt: 'Sun Jan 09 2022'
      } ,
      {
        email: 'Estella_Doyle91@yahoo.com',
        username: 'Kiara.Kautzer25',
        hashedPassword: '$2a$10$n3qbZ2chmTo1CIbVzTIwQeMDg9mqLTbri9.honRzoZ2creldRmyee',
        createdAt: 'Sat Dec 05 2015',
        updatedAt: 'Sun Mar 13 2022'
      } ,
      {
        email: 'Judah52@yahoo.com',
        username: 'Stefan_Gusikowski',
        hashedPassword: '$2a$10$EA/W799eNczx/TWGUCgh9uVC09XxUuLRPwaaoyEGG7w6h7Q4yf2Gi',
        createdAt: 'Sat Jun 22 2019',
        updatedAt: 'Fri Jan 14 2022'
      } ,
      {
        email: 'Arlo.Jenkins@yahoo.com',
        username: 'Ona98',
        hashedPassword: '$2a$10$CEhr4ji7XxOxcJOEPQOaje0DAWzvE3Wc41bJcZ6xECQzUe.q4pyb6',
        createdAt: 'Tue Feb 12 2019',
        updatedAt: 'Wed Feb 09 2022'
      } ,
      {
        email: 'Anne_Hane81@hotmail.com',
        username: 'Noah75',
        hashedPassword: '$2a$10$3JIWoV2hBOB28WyrftFRNuRZkXjo2z8/sZ1te6VVysffgp5souQM6',
        createdAt: 'Sat Nov 11 2017',
        updatedAt: 'Mon Mar 07 2022'
      } ,
      {
        email: 'Bryana.Weber91@hotmail.com',
        username: 'Margarett22',
        hashedPassword: '$2a$10$M3bdaa6piLNMwSVsL0ov1edtNj3hYp5rLldzRhVWdHGzHCg814Y66',
        createdAt: 'Thu Feb 23 2017',
        updatedAt: 'Tue Jan 25 2022'
      } ,
      {
        email: 'Jalon30@gmail.com',
        username: 'Jaylan_Weissnat',
        hashedPassword: '$2a$10$5Z5oPl7lmJkYeTCEqLYyPeU8Wa0o9O23fGL0RQGebtKGANS3aYgL6',
        createdAt: 'Sun Mar 07 2021',
        updatedAt: 'Mon Jan 31 2022'
      } ,
      {
        email: 'Estelle10@gmail.com',
        username: 'Kellen_Reichel',
        hashedPassword: '$2a$10$JXH4sasvtrWPD6rYhYw/3eH6Dbx.MCqkNSj4u3jxlD/RBvxRmV/nS',
        createdAt: 'Sat Dec 11 2021',
        updatedAt: 'Tue Feb 01 2022'
      } ,
      {
        email: 'Vivianne_Kerluke16@gmail.com',
        username: 'Hellen_Block',
        hashedPassword: '$2a$10$9cdKQFuq/UAtEExQB4KD3ePrJS947u7SjDzazrRnIC/U..zrltU5m',
        createdAt: 'Tue Dec 27 2016',
        updatedAt: 'Tue Mar 08 2022'
      } ,
      {
        email: 'Ova.Altenwerth99@gmail.com',
        username: 'Iliana_Walter',
        hashedPassword: '$2a$10$Cec83VLDrwpogmY12wtNbOLsjTtTI2LtYQrbq7bBKD/SHcV/hfDIm',
        createdAt: 'Tue Feb 02 2021',
        updatedAt: 'Fri Mar 04 2022'
      } ,
      {
        email: 'Khalil_VonRueden98@hotmail.com',
        username: 'Layla.Flatley',
        hashedPassword: '$2a$10$xxskXZzDdjMwjeBltpQHkuBh0lSMAqAOFY76YBIMxAhLd03dW3PQ2',
        createdAt: 'Wed Jan 08 2020',
        updatedAt: 'Mon Jan 31 2022'
      } ,
      {
        email: 'Eleazar.Auer94@yahoo.com',
        username: 'Xzavier_Bogisich',
        hashedPassword: '$2a$10$t/njTgjr0z7BaKCVDKGOquYJ8IQftB6c49s8c8GLxg0Et6Klqx2A6',
        createdAt: 'Sat Apr 04 2020',
        updatedAt: 'Wed Feb 02 2022'
      } ,
      {
        email: 'Dorris_Waelchi36@gmail.com',
        username: 'Tamara_Stark48',
        hashedPassword: '$2a$10$rW3tLksTe/gh.ejNU1MunuZZmy.oEAchdooaWkFMesopROtkrAVbK',
        createdAt: 'Sat Oct 27 2018',
        updatedAt: 'Fri Feb 11 2022'
      } ,
      {
        email: 'Easton.Rogahn@gmail.com',
        username: 'Ken18',
        hashedPassword: '$2a$10$VhDjSv2hfdh55E8oDwf8kuuHLciDT9UyAyy73E8tDv7YFZ8d5nToO',
        createdAt: 'Sun Dec 08 2019',
        updatedAt: 'Fri Jan 14 2022'
      } ,
      {
        email: 'Carey44@yahoo.com',
        username: 'Mateo_Deckow',
        hashedPassword: '$2a$10$arzZlSiiv8Ml5JyEVPpcrOl1xbsm0UPslS8y8tVHxfHGiWI0UE4uS',
        createdAt: 'Sat Aug 08 2015',
        updatedAt: 'Wed Jan 26 2022'
      } ,
      {
        email: 'Cody34@gmail.com',
        username: 'Arturo84',
        hashedPassword: '$2a$10$1.AorLxSx9oT2w.GYtdxDuM33vxXhmy68qMhMq71e/vRTMhW/PXzC',
        createdAt: 'Sat Jun 08 2019',
        updatedAt: 'Sat Mar 05 2022'
      } ,
      {
        email: 'Angeline.Medhurst@gmail.com',
        username: 'Baylee.Borer60',
        hashedPassword: '$2a$10$e10ZyCP6ICnOLFDqzEM3suqeQhRpEYKXXaQM42tIy54WYhxGkAwbC',
        createdAt: 'Mon Jan 11 2021',
        updatedAt: 'Sat Mar 05 2022'
      } ,], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Users', null, {});

  }
};
