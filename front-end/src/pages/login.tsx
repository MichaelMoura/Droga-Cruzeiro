import { useState } from "react"
import { useEffect } from "react"
import { api } from "../api/api"


export function Login(){

    const [user,setUser] = useState({message:String,person:String})

    useEffect(()=>{
        api.get("/")
        .then((response:any)=>{setUser(response.data)})
        .catch((err)=>{alert(err)})
    },[])


    return(
        <div>
            <h1>{user.message}</h1>
            <h1>{user.person}</h1>
        </div>
    )
}