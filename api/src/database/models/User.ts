import { time, timeStamp } from "console";
import { DataTypes, Sequelize } from "sequelize";

export const User = (sequelize: Sequelize) => {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "John",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Doe",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timeStamps: true,
    }
  );
};
