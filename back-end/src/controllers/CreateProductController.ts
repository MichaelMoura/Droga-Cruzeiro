import {Request,Response} from "express";
import { IProductRequest } from "../interfaces/IProductRequest";
import { CreateProductService } from "../services/CreateProductService";

export class CreateProductController{
    async handle(request:Request,response:Response){
        const {category,description,is_available,measurement_units,product_name,value}:IProductRequest = request.body

        const createProductService = new CreateProductService();
        
        const product = await createProductService.execute({category,description,is_available,measurement_units,product_name,value})

        return response.json(product)
    }
}