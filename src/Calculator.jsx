import React, { useState } from 'react'
import styled from 'styled-components'
import Butn from './Butn';

export default function Calculator(){

    const [inpValue,setInpValue]=useState("");

    const evalut =()=>{
         let resulty =eval(inpValue)

         setInpValue(String(resulty))

    }
    const C =()=>{
        setInpValue("")

   }
    const rev =()=>{
        let kk= inpValue.slice(0,inpValue.length-1)
        setInpValue(kk)
       

   }

    const BtnData = [
        {
            value:1
        },
        {
            value:2
        },
        {
            value:3
        },
        {
            value:4
        },
        {
            value:5
        },
        {
            value:6
        },
        {
            value:7
        },
        {
            value:8
        },
        {
            value:9
        },
        {
            value:0
        },
        {
            value:"."
        },
        {
            value:"%"
        },
        {
            value:"/"
        },
        {
            value:"X"
        },
        {
            value:"-"
        },
        {
            value:"+"
        },
        
    ]
    return(
        <Cltr>
            <input type="text" value={inpValue} onChange={(e)=>{setInpValue(e.target.value)}} style={{gridColumnStart:1,gridColumnEnd:5,padding:"8px",fontSize:"25px",height:"86px",marginTop:"4px",width:"97%",borderRadius:"10px",backgroundColor:"rgba(255,255,255,0.2)",border:"none"}}/>
            {
                BtnData.map((val)=>{
                     return <Butn inpValue={inpValue} setInpValue={setInpValue} value={val.value} />
                })
            }
            <Ebtn value={"="} onClick={evalut}>=</Ebtn>
            <Ebtn value={"C"} onClick={C}>C</Ebtn>
            <Ebtn value={"~="} onClick={rev}>~=</Ebtn>
        </Cltr>
    );
}

const Cltr = styled.div`
  min-width: 40vw;
  display: grid;
  padding: 4px;
  border-radius: 4px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 4px;
  place-items: center;
  background-color: #0E4879;
  min-height: 70%;
`;

const Ebtn= styled.button`
  padding: 35px 30px;
  border:none;
  border-radius: 10px;
  background-color: aliceblue;
`;

