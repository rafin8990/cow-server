/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import ApiError from '../../../errors/ApiError'
import { userService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import httpStatus from 'http-status'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const { ...user } = req.body
      console.log(user)
      const result = await userService.createUser(user)
      res.status(200).json({
        success: true,
        message: 'user created successfully',
        data: result,
      })
    } catch (error: any) {
      if (error.code === 11000) {
        throw new ApiError(500, 'Phone number already exist')
      }
    }
  },
)

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUsers()

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully !',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await userService.getSingleUser(id)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully !',
    data: result,
  })
})

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  const result = await userService.updateUser(id, updatedData)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully !',
    data: result,
  })
})

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await userService.deleteUser(id)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully !',
    data: result,
  })
})

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
