import { IEmployee } from "../interfaces/employees";
import Employee from "../models/employee";

class EmployeesRepository {
    async save(data: IEmployee): Promise<IEmployee> {
        return await Employee.create(data);
    }

    async readByName(name: string): Promise<IEmployee | null> {
        return await Employee.findOne({ name: name })
    }

    async read(sorted: string | undefined): Promise<{employees: IEmployee[], count: number}> {    
        const count = await Employee.find().count()
        
        if (sorted === "true") {
            const employees = await Employee.find().sort({ name: 1 });

            return { employees, count }
        } else if (sorted === "false") {
            const employees = await Employee.find().sort({ name: -1 });

            return { employees, count }
        } else {
            const employees = await Employee.find().sort({ name: 1 });

            return { employees, count }
        }
    }

    async readOne(id: string): Promise<IEmployee | null> {
        return await Employee.findById(id) || null
    }

    async delete(id: string): Promise<IEmployee | null> {
        return await Employee.findByIdAndDelete(id)
    }

    async updateOne(id: string, data: IEmployee): Promise<IEmployee | null> {
        return await Employee.findByIdAndUpdate(id, data, { new: true })
    }
}

export default EmployeesRepository;
