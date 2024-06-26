import { Request, Response } from 'express';
import EmployeesService from "../services/employee";
import AppError from '../errors/AppError';

class EmployeeController {
    private employeeService: EmployeesService;

    constructor() {
        this.employeeService = new EmployeesService();
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const employee = await this.employeeService.create(req.body);
            res.status(200).json(employee);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                console.error("Error:", error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }

    async findMany(req: Request, res: Response) {
        try {
            const sorted = req.query.sorted as string | undefined;
            const searchTerm = req.query.search as string | undefined;
    
            const response = await this.employeeService.findMany(sorted, searchTerm);
            res.status(200).json(response);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const id = req.params.id
            const employee = await this.employeeService.findOne(id)

            res.status(200).json(employee)
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }

    async deleteOne(req: Request, res: Response) {
        try {
            const id = req.params.id
            const employee = await this.employeeService.deleteOne(id)
            
            res.status(200).json({ message: "Employee Deleted", employee: employee })
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }

    async updateOne(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const employee = await this.employeeService.update(id, req.body);

            res.status(200).json({ message: "Employee Updated", employee: employee });
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }
}

export default new EmployeeController();
