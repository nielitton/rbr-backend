const mongoose = require("mongoose")

const { Schema } = mongoose

const employeeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    charge: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    actions: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = {
    Employee,
}