import crypto from "crypto"



export class Encrypt{
    private readonly key:string;
    private readonly alg:string;

    constructor(){
        this.key = `${process.env.NODE_ENV_CRYPTO_KEY}`
        this.alg = `${process.env.NODE_ENV_CRYPTO_ALG}`;
    }

    encrypt(value:string):string{
            /*the famous gambiarra. for some reason, the Buffer does not accept environment variables 
            as a parameter. So, we need to convert to acceptable data type*/
            const iv = Buffer.from(crypto.randomBytes(Number(process.env.NODE_ENV_CRYPTO_IV)));
            const dataEncrypted = crypto.createCipheriv(this.alg,this.key,iv).update(value,"utf8")
            return `${iv.toString("hex")}:${dataEncrypted.toString("hex")}`
    }

    decrypt(value:string){
        const [iv,data] = value.split(":")
        let decipher = crypto.createDecipheriv(this.alg, this.key, Buffer.from(iv,"hex"));
        let plainText = decipher.update(Buffer.from(data,"hex")).toString("hex");
        let fixBug = plainText[1] + plainText[0] + plainText[3]
        return fixBug
    }
}