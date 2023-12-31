import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { CowController } from './cow.controller'
import { CowValidation } from './cow.validation'
const router = express.Router()

router.post(
  '/create-cow',
  validateRequest(CowValidation.createCowZodSchema),
  // auth(ENUM_USER_ROLE.SELLER),
  CowController.createCow,
)
router.get(
  '/',

  CowController.getAllCows,
)
router.get(
  '/:id',

  CowController.getSingleCow,
)
router.patch(
  '/:id',
  validateRequest(CowValidation.updateCowZodSchema),

  CowController.updateCow,
)
router.delete('/:id', CowController.deleteCow)
export default router
