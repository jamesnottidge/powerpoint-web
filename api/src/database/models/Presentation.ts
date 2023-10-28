import { Sequelize, DataTypes } from "sequelize";

export const Presentation = (sequelize: Sequelize) => {
  return sequelize.define(
    "Presentation",
    {
      presentation_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_public: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      thumbnail_url: {
        type: DataTypes.STRING,
        defaultValue: "https://svg.template.creately.com/MIQyt1kde0t",
      },
      template_id: {
        type: DataTypes.UUID,
      },
      slide_count: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
    }
  );
};
