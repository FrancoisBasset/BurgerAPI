module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        isAdvertised: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        promotion: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        paranoid: false,
        underscored: false,
        freezeTableName: true
    });

    Menu.associate = _associate;
    return Menu;
};

_associate = (models) => {
    models.Menu.hasMany(models.Product, {
        as: 'Products'
    });
}
