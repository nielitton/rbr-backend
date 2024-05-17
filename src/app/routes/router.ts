import { Router } from 'express';
import {employeesRouter} from './employee.route';

const router = Router();

router.use("/", employeesRouter);

export default router;
