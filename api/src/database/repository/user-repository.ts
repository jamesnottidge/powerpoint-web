import { Sequelize } from "sequelize";
import { User } from "../models/User";

export class UserRepository {
  client: Sequelize;
  model: Sequelize["models"];
  constructor(sequelize: Sequelize) {
    this.client = sequelize;
    this.model = sequelize.models;
  }

  async findEmail(email: string) {
    try {
      const user = await this.model.User.findOne({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Email not found");
    }
  }

  async createUser(user: any) {
    try {
      const { firstName, lastName, email, password } = user;
      const newUser = await this.model.User.create({
        firstName,
        lastName,
        email,
        password,
      });
      return newUser;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  }
}
