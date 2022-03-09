'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
    Reviews.hasMany(models.Spot, { foreignKey: 'spotId'})
  };
  return Reviews;
};
