module.exports = function(sequelize, DataTypes) {
  const Menu = sequelize.define('Menu', {
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
    }
  }, {
    paranoid: false,
    underscored: false,
    freezeTableName: true
  });

  return Menu;
};

function _associate(models) {
  models.Menu.hasMany(models.Product, {
    as: 'product'
  });
}
