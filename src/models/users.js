/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Users = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('Users', {
        id: DataTypes.INTEGER,
        display_name: DataTypes.STRING,
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

    return UsersTable;
    };
 
  module.exports = Users;
  