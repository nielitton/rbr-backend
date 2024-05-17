import { Response } from 'express';

class AppError extends Error {
    public readonly statusCode: number;
    public readonly status: string;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message);
        console.log(message)

        this.message = message;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }

    static sendErrorResponse(res: Response, statusCode: number, message: string) {
        res.status(statusCode).json({
            statusCode,
            message
        });
    }
}

export default AppError;
