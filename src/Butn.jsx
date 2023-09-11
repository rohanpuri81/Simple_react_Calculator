import React from 'react'

export default function Butn(props){
    

    return(
        <div onClick={()=>{
            if(props.value=="X"){
                props.setInpValue(String(props.inpValue)+"*")
            }else{
            props.setInpValue(String(props.inpValue)+props.value)
            }
        }}  style={{backgroundColor:"#A7A8DC",borderRadius:"11px",cursor:"pointer",padding:"38px 32px"}}>
            <p value={props.value}>{props.value}</p>
        </div>
    )
}