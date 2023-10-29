import { Sequelize } from "sequelize";
import { sequelize } from "../database/db";
import { PresentationRepository } from "../database/repository/presentation-repository";

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
}
