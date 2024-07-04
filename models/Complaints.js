
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Complaints", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aduan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
    });
  
    return Users;
  };
  