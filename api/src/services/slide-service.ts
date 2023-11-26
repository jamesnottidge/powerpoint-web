import { Sequelize } from "sequelize";
import { sequelize } from "../database/db";
import { SlideRepository } from "../database/repository/slide-repository";
import { AuthorizationError } from "../modules/error-types";

export class SlideService {
  repository: SlideRepository;
  constructor() {
    this.repository = new SlideRepository(sequelize);
  }

  async createSlide(slide: any) {
    try {
      if (
        !(await this.repository.ownershipCheck(
          slide.presentation_id,
          slide.added_by
        ))
      ) {
        throw new Error(
          "You do not have permission to add slides to this presentation"
        );
      }
      const newSlide = await this.repository.createSlide(slide);
      return newSlide;
    } catch (error: any) {
      console.error(error);
      if (
        error.message ===
        "You do not have permission to add slides to this presentation"
      ) {
        throw new AuthorizationError(error.message, error);
      }
    }
  }
}
