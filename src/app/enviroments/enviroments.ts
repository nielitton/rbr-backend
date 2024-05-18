import { configDotenv } from "dotenv"

configDotenv()

export const PORT = process.env.PORT
export const DB_STRING = process.env.DB_STRING || ''