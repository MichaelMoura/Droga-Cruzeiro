import crypto from "crypto"

export class Encrypt{
    async encrypt(value:string):Promise<string | Error>{
        const alg = process.env.NODE_CRYPTO_ALG;

        try{
            crypto.createCipher()
            return ""
        }catch(err){
            return err
        }
    }
}