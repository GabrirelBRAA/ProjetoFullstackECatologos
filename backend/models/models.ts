import { PrismaClient, Products, Images, Skus } from '@prisma/client'


const prisma = new PrismaClient();

export class ProductsModel{

    public static async getProductsByIdArray(number_ids: number[]){
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
    return products
    }

}

export class ImagesModel{

    public static async getImagesByProductId(product_id: number){
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
    return images 
    }
}

export class SkusModel{

    public static async getSkusByProductId(product_id: number){
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
    return skus
    }
}