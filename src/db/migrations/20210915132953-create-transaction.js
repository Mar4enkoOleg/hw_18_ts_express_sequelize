"use strict";

const { STRING } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Transaction", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Order",
          key: "id",
        },
      },
      object: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      currency: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      failure_message: {
        type: Sequelize.STRING,
      },
      source_id: {
        type: Sequelize.STRING,
      },
      source_object: {
        type: Sequelize.STRING,
      },
      source_brand: {
        type: Sequelize.STRING,
      },
      source_message: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Transaction");
  },
};
