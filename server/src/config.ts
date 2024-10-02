import "reflect-metadata";

import { env } from 'node:process';
import { configDotenv } from 'dotenv';

class Config  {
  constructor (private readonly env: NodeJS.ProcessEnv) {}

  isProd () {
    return this.env['NODE_ENV'] === 'production';
  }

  getDb () {
    return {
      serviceName: this.env.DB_SERVICE_NAME,
      type: this.env.DB_TYPE as any,
      host: this.env.DB_HOST,
      port: parseInt(this.env.DB_PORT as string, 10),
      username: this.env.DB_USERNAME,
      password: this.env.DB_PASSWORD,
      database: this.env.DB_DATABASE,
    };
  }
}

const config = new Config(env);
configDotenv({
  processEnv: env as any,
  path: `.env.${config.isProd() ? 'prod' : 'dev'}`,
});

export {
  Config,
  config,
};

