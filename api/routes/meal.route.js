import { Router } from 'express'

// controller
import MealController from '../controllers/meal.controller';

const router = Router()

router.get('/', MealController.fetchAllMeals)
router.post('/', MealController.addMeal)
router.get('/:id', MealController.getSingleMeal)

export default router