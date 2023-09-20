import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { authServices } from './auth.service';

const signUp = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authServices.signUp(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authServices.signIn(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Login successfully !',
    data: result,
  });
});
export const authController = {
  signUp,
  signIn,
};
