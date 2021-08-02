import crypto, {Hash} from "crypto"


export class Encrypt{
    encrypt(value:string){
            /*the famous gambiarra. for some reason, the Buffer does not accept environment variables 
            as a parameter. So, we need to convert to acceptable data type*/
            const iv = Buffer.from(crypto.randomBytes(Number(process.env.NODE_ENV_CRYPTO_IV)));
            const key = `${process.env.NODE_ENV_CRYPTO_KEY}`
            const alg = `${process.env.NODE_ENV_CRYPTO_ALG}`;

            const dataEncrypted = crypto.createCipheriv(alg,key,iv).update(value,"utf8","hex")
            
            return `${iv.toString("hex")}:${dataEncrypted}`
        
    }
}