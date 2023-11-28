import { Sequelize } from "sequelize";
import { sequelize } from "../database/db";
import { PresentationRepository } from "../database/repository/presentation-repository";
import { AuthorizationError, DatabaseError } from "../modules/error-types";

export class PresentationService {
  repository: PresentationRepository;
  constructor() {
    this.repository = new PresentationRepository(sequelize);
  }

  async createPresentation(presentation: any) {
    try {
      const newPresentation = await this.repository.createPresentation(
        presentation
      );
      return newPresentation;
    } catch (error) {
      console.error(error);
      throw new Error("presentation service");
    }
  }

  async addEditorToPresentation(
    presentation_id: string,
    editor_id: string,
    user_id: string
  ) {
    try {
      const isOwner = await this.repository.ownershipCheck(
        presentation_id,
        user_id
      );
      if (!isOwner) {
        throw new AuthorizationError(
          "You do not have permission to edit this presentation"
        );
      }
      const presentation = await this.repository.addEditorToPresentation(
        presentation_id,
        editor_id
      );
      return presentation;
    } catch (error) {
      if (
        error instanceof AuthorizationError ||
        error instanceof DatabaseError
      ) {
        throw error;
      }
      console.error(error);
      throw new Error("presentation service");
    }
  }
}
