import { DataTypes, Sequelize } from "sequelize";
import { User } from "./User";
import { Presentation } from "./Presentation";
import { Slide } from "./Slide";

export function associations(sequelize: Sequelize) {
  console.log(sequelize);
  const user = User(sequelize);
  const presentation = Presentation(sequelize);
  const slide = Slide(sequelize);

  user.hasMany(presentation, {
    foreignKey: {
      name: "created_by",
      //   type: DataTypes.UUID,
      allowNull: false,
    },
  });
  presentation.belongsTo(user);

  presentation.hasMany(slide, {
    foreignKey: {
      name: "presentation_id",
      allowNull: false,
    },
  });

  slide.belongsTo(presentation);

  presentation.belongsToMany(user, {
    through: "Editors",
    as: "editor",
    foreignKey: "presentation_id",
  });

  user.belongsToMany(presentation, {
    through: "Editors",
    as: "presentation",
    foreignKey: "user_id",
  });
}
