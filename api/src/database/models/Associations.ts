import { DataTypes, Sequelize } from "sequelize";
import { User } from "./User";
import { Presentation } from "./Presentation";

export function associations(sequelize: Sequelize) {
  console.log(sequelize);
  const user = User(sequelize);
  const presentation = Presentation(sequelize);

  user.hasMany(presentation, {
    foreignKey: {
      name: "created_by",
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  presentation.belongsTo(user);
}
