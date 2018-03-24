module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DOUBLE
    },
    isAdvertised: {
      type: DataTypes.BOOLEAN
    },
    promotion: {
      type: DataTypes.DOUBLE
    },
  }, {
    paranoid: false,
    underscored: false,
    freezeTableName: true,
  });

  Product.associate = _associate;
  return Product;
};

function _associate(models) {
  models.Product.belongsTo(models.Menu);
}
