module.exports = (sequelize, DataTypes) => {
    const Command = sequelize.define('Command', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    },{
        paranoid: false,
        underscored: false,
        freezeTableName: true
    });

    Command.associate = _associate;
    return Command;
};

const _associate = (models) => {
    models.Command.belongsTo(models.Customer);
    models.Command.belongsTo(models.Product);
    models.Command.belongsTo(models.Menu);
}
