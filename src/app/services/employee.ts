import { IEmployee } from "../interfaces/employees";
import EmployeesRepository from "../repositories/employees";
import AppError from "../errors/AppError";
import { isValidObjectId } from "mongoose";

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

    async findMany(sorted: boolean | undefined): Promise<IEmployee[]> {
        return await this.newEmployeeRepository.read(sorted)
    }

    async findOne(id: string): Promise<IEmployee | null> {
        const objectId = isValidObjectId(id)

        if(!objectId) {
            throw new AppError("Invalid id", 400)
        }

        const employee = await this.newEmployeeRepository.readOne(id)

        if(!employee) {
            throw new AppError("Employee not found", 404)
        }

        return employee || null
    }

    async deleteOne(id: string): Promise<IEmployee | null> {
        const objectId = isValidObjectId(id)

        if(!objectId) {
            throw new AppError("Invalid id", 400)
        }

        const employee = await this.newEmployeeRepository.delete(id)

        if(!employee) {
            throw new AppError("Employee not found", 404)
        }

        return employee
    }

    async update(id: string, data: IEmployee): Promise<IEmployee | null> {
        const objectId = isValidObjectId(id)

        if(!objectId) {
            throw new AppError("Invalid id", 400)
        }
        
        if (!data.actions || !data.charge || !data.department || !data.name) {
            throw new Error("Todos os campos (actions, charge, department, name) são obrigatórios");
        }

        const employee = await this.newEmployeeRepository.updateOne(id, data)
        
        if(!employee) {
            throw new AppError("Employee not found", 404)
        }
        
        return employee
    }
}

export default EmployeeService;
