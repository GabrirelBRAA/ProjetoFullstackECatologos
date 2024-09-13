import { Request, Response} from "express";
import prisma from '../models/models'

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

    const products = await prisma.products.findMany({
        where:{
            id:{in: number_ids}
        },
        select:{
            id: true,
            name: true,
            price: true,
            category: true,
        }
    })

    res.send(products)
}

/**
*   getImages retorna todas as imagens associadas ao id do produto em req.params   
*/
export async function getImagesController(req: Request, res: Response){
    const product_id: number = parseInt(req.params.product_id);

    const images = await prisma.images.findMany({
        where:{
            product_id: product_id
        },
        select:{
            path: true,
            order: true,
            company_key: true,
        }
    })

    res.send(images)
}

/**
*   getSkus retorna todos os skus associados ao id do produto em req.params   
*/
export async function getSkusController(req: Request, res: Response){
    const product_id: number = parseInt(req.params.product_id);

    const skus = await prisma.skus.findMany({
        where:{
            product_id: product_id
        },
        select:{
            size: true,
            open_grid: true,
            stock: true,
            min_quantity: true,
        }
    })

    const json = JSON.stringify(skus, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    res.send(json)
}
