import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
import { userController } from './user.controller'
const router = express.Router()

router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser,
)

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  userController.updateUser,
)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.delete('/:id', userController.deleteUser)
export default router
