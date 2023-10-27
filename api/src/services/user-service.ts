import { sequelize } from "../database/db";
import { UserRepository } from "../database/repository/user-repository";
import { createJWT, hashPassword, comparePassword } from "../modules/auth";

export class UserService {
  repository: UserRepository;
  constructor() {
    this.repository = new UserRepository(sequelize);
  }

  async createUser(userInput: any) {
    try {
      const { firstName, lastName, email, password } = userInput;
      const validateEmail = await this.repository.findEmail(email);
      if (validateEmail) {
        throw new Error("User with this email already exists");
      }
      const newUser = await this.repository.createUser({
        firstName,
        lastName,
        email,
        password: await hashPassword(password),
      });
      return newUser;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  }

  async loginUser(userInput: any) {
    try {
      const { email, password } = userInput;
      const user = await this.repository.findEmail(email);
      const validatePassword = await comparePassword(password, user.password);
      if (!validatePassword) {
        throw new Error("Incorrect password");
      }
      const token = createJWT(user);
      return {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      };
    } catch (error) {
      console.error(error);
      throw new Error("Error logging in user");
    }
  }
}
