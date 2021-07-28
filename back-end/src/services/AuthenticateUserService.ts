import {ILoginRequest} from "../interfaces/ILoginRequest"
import {sign} from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { compare } from "bcryptjs";

export class AuthenticateUserService{
    async execute({email,password}:ILoginRequest){

        console.log(email, password)
        const userRepository = getCustomRepository(UserRepository);
        
        const user = await userRepository.findOne({email})

        if(!user){
            throw new Error("Email or password incorrect")
        }

        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("Email or password incorrect")
        }

        const token = sign({
            email: user.email,
            name: user.name,
        }, "18d6b595d2d05d2fa3216b5eafce1a7e",{
            subject: user.id,
            expiresIn: "1d",
        })

        return token
    }
}

