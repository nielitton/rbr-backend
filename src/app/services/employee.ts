import { IEmployee } from "../interfaces/employees";
import EmployeesRepository from "../repositories/employees";
import Employee from "../models/employee";
import AppError from "../errors/AppError";

class EmployeeService {
    newEmployeeRepository = new EmployeesRepository;

    constructor() {
        this.newEmployeeRepository = new EmployeesRepository();
    }

    async create(data: IEmployee): Promise<any> {
        const exists = await this.newEmployeeRepository.readByName(data.name)

        if(exists) {
            throw new AppError("Employee alreay exists", 400)
        }

        return await this.newEmployeeRepository.save(data);
    }

    async findMany(): Promise<IEmployee[]> {
        const employees =  await this.newEmployeeRepository.read()
        return employees
    }

    async findOne(id: string): Promise<IEmployee | null> {
        const employee = await this.newEmployeeRepository.readOne(id)

        if(!employee) {
            throw new AppError("Employee not found", 404)
        }

        return employee || null
    }

    async deleteOne(id: string): Promise<IEmployee | null> {
        const employee = await this.newEmployeeRepository.delete(id)

        return employee
    }

    async update(id: string, data: IEmployee): Promise<IEmployee | null> {
        const employee = await this.newEmployeeRepository.updateOne(id, data)
        return employee
    }
}

export default EmployeeService;
