import mongoose, { Document, Schema } from "mongoose";
import { IEmployee } from "../interfaces/employees";

export interface EmployeeDocument extends Document, IEmployee {}

const employeeSchema: Schema<EmployeeDocument> = new Schema({
    name: {
        type: String,
        required: true,
        min: [2, "Employee name is too short"]
    },
    charge: {
        type: String,
        required: true,
        min: [2, "Employee charge is too short"]
    },
    department: {
        type: String,
        required: true,
        min: [2, "Employee department is too short"]
    },
    actions: {
        type: String,
        required: true,
        min: [2, "Employee actions is too short"]
    },
}, { timestamps: true },);

const Employee = mongoose.model<EmployeeDocument>("Employee", employeeSchema);

export default Employee;
