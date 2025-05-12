// Payment Model
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../mysqlConnection/dbConnection');
const  Order  = require('../orderModel/orderModel');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending', // Example statuses: Pending, Completed, Failed
  },

  paymentReferenceId: {
    type: DataTypes.STRING,
    allowNull: true, // May be null until payment is processed
  },

  paymentDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },

}, {
  tableName: 'payments',
  timestamps: true,
});



module.exports =  Payment ;
