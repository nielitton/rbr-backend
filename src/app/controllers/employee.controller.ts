import { ErrorRequestHandler, Request, Response } from 'express';

import EmployeesService from "../services/employee";
import { IEmployee } from '../interfaces/employees';
import { Error } from 'mongoose';
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
            const response = await this.employeeService.findMany()
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
            
            res.status(200).json({ message: "Employe deleted", employee: employee })
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                // Se não for uma instância de Error, retorne um erro genérico
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }

    async updateOne(req: Request, res: Response) {
        try {
            const id = req.params.id;

            if (!req.body.actions || !req.body.charge || !req.body.department || !req.body.name) {
                throw new Error("Todos os campos (actions, charge, department, name) são obrigatórios");
            }

            const newEmployee: IEmployee = {
                actions: req.body.actions,
                charge: req.body.charge,
                department: req.body.department,
                name: req.body.name
            }

            const employee = await this.employeeService.update(id, newEmployee);

            res.status(200).json({ message: "Funcionário atualizado", employee: employee });
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                // Se não for uma instância de Error, retorne um erro genérico
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }
}

export default new EmployeeController();
