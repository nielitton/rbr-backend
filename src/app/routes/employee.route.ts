import { Router, Request, Response } from 'express';
import EmployeeController from '../controllers/employee.controller';

const employeesRouter = Router();

employeesRouter.route("/employees").post((req: Request, res: Response) => EmployeeController.create(req, res));
employeesRouter.route("/employees").get((req: Request, res: Response) => EmployeeController.findMany(req, res));
employeesRouter.route("/employees/:id").get((req: Request, res: Response) => EmployeeController.findOne(req, res))
employeesRouter.route("/employees/:id").delete((req: Request, res: Response) => EmployeeController.deleteOne(req, res))
employeesRouter.route("/employees/:id").put((req: Request, res: Response) => EmployeeController.updateOne(req, res))

export { employeesRouter };