import { Request, Response, NextFunction } from 'express';
import AppError from './AppError';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        // Se o erro for uma instância de AppError, envie uma resposta de erro ao cliente
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } else {
        // Se o erro não for uma instância de AppError, envie uma resposta de erro genérico
        console.error('Erro interno:', err);
        res.status(500).json({
            status: 'error',
            message: 'Erro interno do servidor'
        });
    }
};

export default errorHandler;
