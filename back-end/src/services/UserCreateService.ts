import { getCustomRepository, Connection, getConnection, getConnectionOptions, getRepository} from "typeorm"
import {IUserRequest} from "../interfaces/IUserRequest"
import { UserRepository } from "../repositories/UserRepository"
import {hash} from "bcryptjs"
import { User } from "../entities/User"

export class CreateUserService{
    async execute({name,last_name,cpf,email,password,birth_date}:IUserRequest):Promise<User>{

        const userRepository = getCustomRepository(UserRepository)

        const userEmailAlreadyExists = await userRepository.findOne({
            email
        })

        const userCpfAlreadyExists = await userRepository.findOne({
            cpf
        })

        if(userCpfAlreadyExists || userEmailAlreadyExists){
            return throw new Error("The user already exists")
        }

        const encryptPassword = await hash(password,8)

        const user = userRepository.create({
            name,
            last_name,
            cpf,
            birth_date,
            email,
            password:encryptPassword
        })

        await userRepository.save(user)

        return user;
    }
}