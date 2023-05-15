/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const User = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
            foreignKey: 'user_id',
            as: 'BlogPosts',
        });
    };

    return UsersTable;
    };
 
  module.exports = User;
  