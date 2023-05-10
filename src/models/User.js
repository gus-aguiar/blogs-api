/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const User = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        tableName: 'users',
        timestamps: false,
        underscored: true,
      },
      );

      UsersTable.associate = (models) => {
        UsersTable.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'posts',
        });
    };

    return UsersTable;
    };
 
  module.exports = User;
  