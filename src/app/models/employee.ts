import mongoose, { Document, Schema } from "mongoose";
import { IEmployee } from "../interfaces/employees";

export interface EmployeeDocument extends Document, IEmployee {}

const employeeSchema: Schema<EmployeeDocument> = new Schema({
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
}, { timestamps: true });

const Employee = mongoose.model<EmployeeDocument>("Employee", employeeSchema);

export default Employee;
