// import { Error } as sequelizeError from "sequelize";
import { Error as SequelizeError } from "sequelize";

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export class DatabaseError extends SequelizeError {
  constructor(message: string, cause?: Error) {
    super(message);
    this.name = "DatabaseError";

    if (cause) {
      this.stack = `${this.stack}\nCaused by: ${cause.stack}`;
    }
  }
}
