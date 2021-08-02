export interface IPaymentRequest{
    cardholder_name:string;

    cardholder_cpf:string;

    number:string;

    expiration_date:Date;

    cvv:string;

    card_banner:string
}