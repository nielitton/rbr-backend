import mongoose, { Document, Schema } from "mongoose";
import { IEmployee } from "../interfaces/employees";

export interface EmployeeDocument extends Document, IEmployee {}

const employeeSchema: Schema<EmployeeDocument> = new Schema({
    name: {
        type: String,
        required: true,
        min: [2, "Nome é muito curto"]
    },
    charge: {
        type: String,
        required: true,
        min: [2, "Cargo é muito curto"]
    },
    department: {
        type: String,
        required: true,
        min: [2, "Departamento é muito curto"]
    },
    admissionDate: {
        type: Date,
        required: true,
        validate: {
            validator: (date: Date) => {
                return !isNaN(date.getTime());
            },
            message: "Data de admissão inválida"
        },
        min: [2, "Data de admissão é muito curta"]
    },
}, { timestamps: true },);

const Employee = mongoose.model<EmployeeDocument>("Employee", employeeSchema);

export default Employee;
