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

  async getPresentations() {
    try {
      const presentations = await this.model.Presentation.findAll();
      return presentations;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Error getting presentations", error);
    }
  }

  async getPresentationsByUser(userId: number) {
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
