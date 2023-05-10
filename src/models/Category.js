/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Catogory = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
    },
    {
        tableName: "categories",
        underscored: true,
        timestamps: false,
        }
    );

    return CategoryTable;
    };
 
  module.exports = Catogory;
  