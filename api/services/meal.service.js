import dummyData from '../utils/dummyData'
import Meal from '../models/meal.model';

const MealService = {
    fetchALLMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal()
            newMeal.id = meal.id 
            newMeal.name = meal.name
            newMeal.price = meal.price
            newMeal.size = meal.size
            return newMeal
        })

        return validMeals
    },

    addMeal(meal) {
        const mealLength = dummyData.meals.length
        const lastId = dummyData.meals[mealLength - 1].id
        const newID = lastId + 1
        meal.id = newID
        dummyData.meals.push(meal)
        return meal
    },

    getAMeal(id) {
        const meal = dummyData.meals.find(meal => meal.id === id)
        return meal || {}
    }
}

export default MealService