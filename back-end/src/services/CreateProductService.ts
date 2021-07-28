import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../interfaces/IProductRequest";
import { ProductRepository } from "../repositories/ProductRepository";


export class CreateProductService{
    async execute({category,description,is_available,measurement_units,product_name,value}:IProductRequest){
        const productRepository = getCustomRepository(ProductRepository)

        const productAlreadyExist = await productRepository.findOne(product_name)

        if(productAlreadyExist){
            throw new Error("The product already exists")
        }

        const product = productRepository.create({
            product_name,
            category, 
            description, 
            is_available,
            measurement_units,
            value,
        })

        await productRepository.save(product)

        return product
    }
}