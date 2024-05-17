import { configDotenv } from "dotenv"

configDotenv()

export const APP_PORT = process.env.APP_PORT
export const DB_STRING = process.env.DB_STRING || ''