import { Slide } from "../models/Slide";
import { Sequelize } from "sequelize";
import { DatabaseError } from "../../modules/error-types";
import { Presentation } from "../models/Presentation";

export class SlideRepository {
  client: Sequelize;
  model: Sequelize["models"];
  constructor(sequelize: Sequelize) {
    this.client = sequelize;
    this.model = sequelize.models;
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

  async createSlide(slide: any) {
    try {
      const { title, subtitle, content, added_by, presentation_id } = slide;
      const newSlide = await this.model.Slide.create({
        presentation_id,
        title,
        subtitle,
        content,
        added_by,
        last_edited_by: added_by,
      });
      return newSlide;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Error creating slide", error);
    }
  }
}
