export abstract class ISecretsAdapter {
  ENV: string;

  PORT: number;

  HOST: string;

  LOGER_LEVEL: string;

  MONGO_URL: string;

  POSTGRES_URL: string;

  REDIS_URL: string;

  ZIPKIN_URL: string;

  MONGO_EXPRESS_URL: string;

  PGADMIN_URL: string;

  PROMETHUES_URL: string;

  TOKEN_EXPIRATION: number;

  RATE_LIMIT_BY_USER: number;

  JWT_SECRET_KEY: string;
}
