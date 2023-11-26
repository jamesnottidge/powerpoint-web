import { Sequelize, DataTypes } from "sequelize";

export const Slide = (sequelize: Sequelize) => {
  return sequelize.define(
    "Slide",
    {
      slide_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      added_by: {
        type: DataTypes.UUID,
      },
      last_edited_by: {
        type: DataTypes.UUID,
      },
    },
    {
      timestamps: true,
    }
  );
};
