// JSEND Standard Compliant: https://github.com/omniti-labs/jsend

import { Response } from 'express';

export const success = async (response: Response, data: any = {}, httpCode: number = 200) => response.status(httpCode).json({
    status: 'success',
    data,
});
  
export const fail = async (response: Response, data: any = {}, httpCode: number = 400) => response.status(httpCode).json({
    status: 'fail',
    data,
});
  
export const error = async (response: Response, message: string = '', httpCode: number = 500) => response.status(httpCode).json({
    status: 'error',
    message,
});