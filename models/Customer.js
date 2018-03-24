module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    paranoid: false,
    underscored: false,
    freezeTableName: true
  });

  Customer.associate = _associate;
  return Customer;
};

function _associate(models) {
  models.Customer.hasMany(models.Command, {
    as: 'commands'
  });
}
