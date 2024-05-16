const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(
            "mongodb+srv://nielitonsousa3040:8GDdrKcUOKuI5CY2@cluster0.xyrqk8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )

        console.log("Conectado");
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

module.exports = main