import express from 'express'
import {getProductsController, getImagesController, getSkusController} from  '../controllers/controllers'

const router = express.Router()

router.get('/products', getProductsController);

router.get('/images/:product_id', getImagesController);

router.get('/skus/:product_id', getSkusController);

export default router;