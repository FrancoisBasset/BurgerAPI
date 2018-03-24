module.exports = function(sequelize, DataTypes) {
  const Command = sequelize.define('Command', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.BIGINT
    }
  }, {
    paranoid: false,
    underscored: false,
    freezeTableName: true
  });

  Command.associate = _associate;
  return Command;
};

function _associate(models) {
  models.Command.belongsTo(models.Customer);
  models.Command.belongsTo(models.Product);
  models.Command.belongsTo(models.Menu);
}
