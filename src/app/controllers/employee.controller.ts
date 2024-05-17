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
                res.status(500).json({ message: "Internal Server Error", error });
            }
        }
    }

    async findMany(req: Request, res: Response) {
        try {
            const sorted = req.query.sorted as boolean | undefined

            const response = await this.employeeService.findMany(sorted)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({
                message: error
            })
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
            
            res.status(200).json({ message: "Employe Deleted", employee: employee })
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                // Se não for uma instância de Error, retorne um erro genérico
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
