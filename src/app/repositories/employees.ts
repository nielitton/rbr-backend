import { IEmployee } from "../interfaces/employees";
import Employee from "../models/employee";

class EmployeesRepository {
    async save(data: IEmployee): Promise<IEmployee> {
        return await Employee.create(data);
    }

    async readByName(name: string): Promise<IEmployee | null> {
        return await Employee.findOne({ name: name })
    }

    async read(sorted: string | undefined, searchTerm: string | undefined): Promise<{ employees: IEmployee[], count: number }> {
        let query = Employee.find();
    
        if (searchTerm) {
            query = query.find({ name: { $regex: searchTerm, $options: "i" } });
        }
    
        if (sorted === "true") {
            query = query.sort({ name: 1 });
        } else if (sorted === "false") {
            query = query.sort({ name: -1 });
        }
    
        const employees = await query;
    
        const count = await Employee.countDocuments(searchTerm ? { name: { $regex: searchTerm, $options: "i" } } : {});
    
        return { employees, count };
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
