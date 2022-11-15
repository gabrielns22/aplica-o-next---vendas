import { InputHTMLAttributes } from 'react'
import { idText } from 'typescript';

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    onChange?: (value: any) => void;
    label: string;
    columnClasses?: string;


    


}

export const Input: React.FC<inputProps> = ({onChange, label, columnClasses, id, ... inputProps}: inputProps) => {

    return(
    <div className={`field + ${columnClasses}`}>
        <label htmlFor={id} className="label">{label}</label>
        <div className="control">
            <input className="input" {...inputProps}
             id={id} onChange={ event => {if(onChange){onChange(event.target.value)}
            }} />
        </div>
    </div>
    )
}