import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import IndividualSeat from "./IndividualSeat"

const LegendSeats = [
    { color: "selected", avaible: null,text:"Selecionado" },
    { color: "1", avaible: true,text:"Disponível" },
    { color: "2", avaible: false,text:"Indisponível" }]

export default function ChairsScreen() {
    const { idSessao } = useParams()
    const [session, setSession] = useState([])


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((resp) => {
            console.log(resp.data.seats)
            setSession(resp.data)
        })
    }, [])

    if (session.length === 0) {
        return (<h1>Vasco</h1>)
    }

    return (
        <>
            <SelectYourSeat>{"Selecione o(s) assento(s)"}</SelectYourSeat>
            <SeatsPanel>
                {session.seats.map((s) => <IndividualSeat key={s.id} avaible={s.isAvailable} id={s.id} name={s.name} />)}
                <ColorLegend>
                    {LegendSeats.map((l) => 
                    <ItemOfLegend>
                        <IndividualSeat key={l.color} id={l.color} avaible={l.avaible} />
                        <p>{l.text}</p>
                    </ItemOfLegend>)}
                </ColorLegend>
            </SeatsPanel>

        </>
    )
}
const SelectYourSeat = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin: 50px 0;
`

const SeatsPanel = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
    width: 90vw;
`

const ColorLegend = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    width: 90vw;
    margin: 8px;
`
const ItemOfLegend = styled.div`
    width: min-content;
    height: min-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.013em;
    

`