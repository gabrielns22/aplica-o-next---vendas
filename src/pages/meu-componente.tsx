import exp from "constants"
import { isArrowFunction } from "typescript";

interface MensagemProps{
    mensagem: String;
}


const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) =>{
    return(
        <div>
            {props.mensagem}
        </div>
    )
    
}

const MeuComponente = () =>{
    return(
        <div>
            <Mensagem mensagem="teste"/>
        </div>
    )   
}

export default MeuComponente;