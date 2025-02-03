import { time } from "console";
import Pessoa from "../model/Pessoa";
import { TIMEOUT } from "dns";


export default function sortearAzarado(pessoas: Pessoa[]): Pessoa {
    let restantes=[...pessoas]
    
    for (let i = 0; i < pessoas.length; i++) {
        
        if(pessoas.length==1){
            return pessoas[0]             
        }
        else {return restantes.splice(Math.floor(Math.random() * restantes.length),1)[0]}
    }

    return restantes[0]
}