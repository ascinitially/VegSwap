module.exports = function(sequelize, DataTypes) {
  var Vegswap = sequelize.define("Vegswap", {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    offering: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    OfferAmount: {
      type: DataTypes.INTEGER,
      
    },

    asking: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    RequestAmount: {
      type: DataTypes.INTEGER,
    }
  });
  return Vegswap;
};

