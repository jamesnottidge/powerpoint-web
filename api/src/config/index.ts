import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}

const config = {
  PORT: process.env.PORT as string,
  POSTGRES_USER: process.env.POSTGRES_USER as string,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_PORT: process.env.POSTGRES_PORT as unknown as number,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE as string,
  POSTGRES_HOST: process.env.POSTGRES_HOST as string,
  APP_SECRET: process.env.APP_SECRET as string,
};

export default config;
