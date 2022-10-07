import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const LegendSeats = [
    { name: "Selecionado", color: "#8dd7cf" },
    {name:"Disponível",color:"#c3cfd9"},
    {name:"Indisponível",color:"#f8c838"}]

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
                {session.seats.map((s) => <Seat key={s.id}>{s.name}</Seat>)}
                <ColorLegend>
                    {LegendSeats.map(()=><Seat  />)}
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
const Seat = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

    height: 26px;
    width: 26px;

    margin: 4px;
   
    background-color: #c3cfd9;

    border-radius: 12px;
    border: 1px solid #808F9D;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;



    cursor: pointer;
`
const ColorLegend = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    width: 90vw;
    margin: 8px;
`