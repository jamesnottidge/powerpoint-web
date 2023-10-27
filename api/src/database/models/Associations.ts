import { DataTypes } from "sequelize";
import { User } from "./User";


export function associations(sequelize: any) {
    console.log(sequelize);
    const user = User(sequelize);
    
}
