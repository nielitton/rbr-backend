import mongoose from "mongoose";
import { DB_STRING } from "../enviroments/enviroments";

async function main(): Promise<void> {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect(
            DB_STRING,
            {useNewUrlParser: true, useUnifiedTopology: true}
        );

        console.log("Conectado");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

export default main;
