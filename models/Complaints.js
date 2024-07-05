// models/Complaint.js
module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define('Complaint', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aduan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Complaint;
};
