import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import IndividualSeat from "./IndividualSeat"

const LegendSeats = [
    { color: "selected", avaible: null, text: "Selecionado" },
    { color: "1", avaible: true, text: "Disponível" },
    { color: "2", avaible: false, text: "Indisponível" }]

export default function ChairsScreen() {
    const { idSessao } = useParams()
    const [session, setSession] = useState([])


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((resp) => {
            console.log(resp.data)
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
            <UserDataInputs>
                <label>{"Nome do Comprador:"}</label>
                <input placeholder="Digite seu nome..."></input>
                <label>{"CPF do Comprador:"}</label>
                <input placeholder="Digite seu CPF..."></input>
            </UserDataInputs>
            <SubmitButton>
                <p>{"Reservar assento(s)"}</p>
            </SubmitButton>
            <Footer2>
                <MiniOutdoor2>
                    <img alt={session.movie.title} src={session.movie.posterURL} />
                </MiniOutdoor2>
                <div>
                    <p>{session.movie.title}</p>
                    <p>{`${session.day.weekday}-${session.name}`}</p>
                </div>
            </Footer2>
        </>
    )
}
const SelectYourSeat = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin: 50px 0 15px 0;
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
const UserDataInputs = styled.div`
    min-height: 20vh;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px auto;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;


    input{
        height:51px;
        padding: 10px;
        margin: 10px 0 10px 0;
        ::placeholder{
            font-family: Roboto;
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            color: #AFAFAF;

        }
    }
    
`
const SubmitButton = styled.div`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    color:white;
    margin-bottom: 117px;

`
const Footer2 = styled.div`
  height: 117px;
  width: 100vw;
  display:flex;
  align-items:center;

  border: 1px solid #dfe6ed;

  background-color: #dfe6ed;

  position: fixed;
  bottom:0;
  left:0;

  p{
      font-family: Roboto;
      font-size: 26px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      
      color: #293845;
    }
`
const MiniOutdoor2 = styled.div`
    height: 89px;
    width: 64px;
    box-sizing:border-box;

    background-color: white;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    padding: 5px;
    border-radius: 3px;
    margin:10px;

    img{
        width:100%;
    }
`