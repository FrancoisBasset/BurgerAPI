module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
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
            allowNull: false,
        },
        promotion: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    }, {
        paranoid: false,
        underscored: false,
        freezeTableName: true,
    });

    Product.associate = _associate;
    return Product;
};

_associate = (models) => {
    models.Product.belongsTo(models.Menu);
}
