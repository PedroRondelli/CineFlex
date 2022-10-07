import { useState } from "react"
import styled from "styled-components"

export default function IndividualSeat({id,name,avaible}) {
    const [selected, setSelected] = useState(false)

    function witchColor(availability){
        if(selected===true || id==="selected"){
            return "#8dd7cf"
        }
        else if(!availability){
            return "#f8c838"
        }
        else if(availability){
            return "#c3cfd9"
        }
    }

    function selection() {
        if(!selected){
            setSelected(true)
        }else{
            setSelected(false)
        }
        
    }

    return(
        <Seat onClick={selection} id={id} color={()=>witchColor(avaible)}>{name}</Seat>
    )
}

const Seat = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

    height: 26px;
    width: 26px;

    margin: 4px;
   
    background-color: ${(props)=>props.color};

    border-radius: 12px;
    border: 1px solid #808F9D;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;

    cursor: pointer;
`