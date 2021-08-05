import crypto from "crypto"


export class Encrypt{
    encrypt(value:string){
            /*the famous gambiarra. for some reason, the Buffer does not accept environment variables 
            as a parameter. So, we need to convert to acceptable data type*/
            const iv = Buffer.from(crypto.randomBytes(Number(process.env.NODE_ENV_CRYPTO_IV)));
            const key = `${process.env.NODE_ENV_CRYPTO_KEY}`
            const alg = `${process.env.NODE_ENV_CRYPTO_ALG}`;

            const dataEncrypted = crypto.createCipheriv("aes-256-gcm",key,iv).update(value,"utf8")
            
            return `${iv.toString("hex")}:${dataEncrypted.toString("hex")}`
        
    }

    decrypt(text:string){
        const key = `${process.env.NODE_ENV_CRYPTO_KEY}`
        let [ivText,textI] = text.split(':');
        let iv = Buffer.from(ivText, 'hex');
        let encryptedText = Buffer.from(textI, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText,"hex","utf8");
        let plainText = Buffer.from([decrypted,decipher.final()])
        return plainText;
    }
}