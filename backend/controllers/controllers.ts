import { Request, Response} from "express";
import {ProductsModel, ImagesModel, SkusModel} from '../models/models'

/**
*   Query com array de números
*/
interface ReqQuery{
    ids: string[]
}

/**
*   getProducts espera um array de ids na query do URL   
*/
export async function getProductsController(req: Request<{}, {}, {}, ReqQuery>, res: Response){
    const ids = req.query.ids;
    const number_ids = ids.map((id) => parseInt(id))

    const products = await ProductsModel.getProductsByIdArray(number_ids)

    const json = JSON.stringify(products, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    res.send(json)
}

//CONTROLLERS ABAIXO DEPRECADOS

/**
*   getImages retorna todas as imagens associadas ao id do produto em req.params   
*/
export async function getImagesController(req: Request, res: Response){
    const product_id: number = parseInt(req.params.product_id);

    const images = await ImagesModel.getImagesByProductId(product_id)

    res.send(images)
}

/**
*   getSkus retorna todos os skus associados ao id do produto em req.params   
*/
export async function getSkusController(req: Request, res: Response){
    const product_id: number = parseInt(req.params.product_id);

    const skus = await SkusModel.getSkusByProductId(product_id)

    const json = JSON.stringify(skus, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    res.send(json)
}
