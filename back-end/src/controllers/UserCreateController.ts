import {Request, Response} from "express"
import { CreateUserService } from "../services/UserCreateService";

export class UserCreateController{
    async handle(request:Request,response:Response){
        // try{
        const {cpf,last_name,name,password,email, birth_date} = request.body;

        const userCreateService = new CreateUserService();

        const user = await userCreateService.execute({email,cpf,last_name,name,password,birth_date});

        return response.json(user)
        // }catch(error){
        //     return response.status(400).json({"message":error.message})
        // }
    }
    
}