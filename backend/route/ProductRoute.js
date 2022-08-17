import express from 'express'
import{
    getRecipe,
    getRecipeById,
    saveRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/ProductController.js'

const router = express.Router();

router.get('/recipes', getRecipe);
router.get('/recipes/:id', getRecipeById);
router.post('/recipes', saveRecipe);
router.put('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);


export default router;