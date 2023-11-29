import { Presentation } from "../models/Presentation";
import { Sequelize } from "sequelize";
import { DatabaseError } from "../../modules/error-types";

export class PresentationRepository {
  client: Sequelize;
  model: Sequelize["models"];
  constructor(sequelize: Sequelize) {
    this.client = sequelize;
    this.model = sequelize.models;
  }

  async createPresentation(presentation: any) {
    try {
      const {
        title,
        description,
        is_public = false,
        is_published = false,
        // thumbnail_url,
        created_by,
      } = presentation;

      const newPresentation = await this.model.Presentation.create({
        title,
        description,
        is_public,
        is_published,
        // thumbnail_url,
        created_by,
      });
      return newPresentation;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Error creating presentation", error);
    }
  }

  async ownershipCheck(presentation_id: any, user_id: any) {
    try {
      const presentation = await this.model.Presentation.findOne({
        where: {
          presentation_id: presentation_id,
        },
      });
      if (presentation?.created_by === user_id) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  }

  async addEditorToPresentation(presentationId: string, editorId: string) {
    try {
      const presentation = await this.model.Presentation.findByPk(
        presentationId
      );
      const user = await this.model.User.findByPk(editorId);
      const existingEditor = await presentation?.hasEditor(user);
      if (existingEditor) {
        throw new DatabaseError("User is already an editor", null);
      }
      await presentation?.addEditor(user);
      return presentation;
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw error;
      }
      console.error(error);
      throw new DatabaseError("Error adding editor to presentation", error);
    }
  }

  async getPresentations() {
    try {
      const presentations = await this.model.Presentation.findAll();
      return presentations;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Error getting presentations", error);
    }
  }

  async getPresentationsByUser(userId: string) {
    try {
      const presentations = await this.model.Presentation.findAll({
        where: {
          created_by: userId,
        },
      });
      return presentations;
    } catch (error) {}
  }

  async getPresentationById(presentationId: number) {
    try {
      const presentation = await this.model.Presentation.findByPk(
        presentationId
      );
      return presentation;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Error getting presentation", error);
    }
  }
}
