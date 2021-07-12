import { FormEvent, useState } from "react";
import {api} from "../api/api"

function Register(){

    const [nameUser,setNameUser] = useState("")
    const [lastNameUser,setLastNameUser] = useState("")
    const [cpfUser,setCpfUser] = useState("")
    const [birthDateUser,setBirthDateUser] = useState(Date)
    const [emailUser,setEmailUser] = useState("")
    const [passwordUser,setPasswordUser] = useState("")

    function cancelReload(e:FormEvent){
        e.preventDefault();
    }

    function createAccount(){
        api.post("/register", 
        {
            name:nameUser,
            last_name:lastNameUser,
            cpf:cpfUser,
            birth_date:birthDateUser,
            email:emailUser,
            password:passwordUser,
        }).then(
            ()=>{alert("the account was created successfully")}
        )
    }

    return(
        <form action="register user"  method="post" onSubmit={cancelReload}>
            <input type="text" name="name" id="name" placeholder="name" onChange={(e)=>setNameUser(e.target.value)}/> 
            <input type="text" name="cpf" id="cpf" placeholder="cpf" onChange={(e)=>setLastNameUser(e.target.value) } />
            <input type="date" name="birth_date" id="birth_date" onChange={(e)=>setBirthDateUser(e.target.value)}/>
            <input type="text" name="email" id="email" placeholder="email" onChange={(e)=>setEmailUser(e.target.value)}/>
            <input type="text" name="password" id="password" placeholder="password" onChange={(e)=>{setPasswordUser(e.target.value)}}/>
            <button type="submit" onClick={createAccount}>Criar Conta</button>
        </form>
    )
}


export {Register}