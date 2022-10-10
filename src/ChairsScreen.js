import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import {  useNavigate,  useParams } from "react-router-dom"
import IndividualSeat from "./IndividualSeat"

const LEGENDSEATS = [
    { color: "selected", avaible: null, text: "Selecionado" },
    { color: "1", avaible: true, text: "Disponível" },
    { color: "2", avaible: false, text: "Indisponível" }]

export default function ChairsScreen({ reservation, setReservation, setInformation, finalScreenInformation }) {
    const { idSessao } = useParams()
    const [session, setSession] = useState([])
    const [cpf, setCpf] = useState("")
    const [buyerName, setBuyerName] = useState("")
    const [selectedSeats, setSeats] = useState([])
    let navigate= useNavigate()

    function changeCpf(event) {
        console.log(event.target.value)
        setCpf(event.target.value)
    }

    function changeBuyerName(event) {
        console.log(event.target.value)
        setBuyerName(event.target.value)
    }

    function reserve() {

        const choiceWasMade = selectedSeats.length > 0
        const nameWasWritten = buyerName !== ""
        const cpfWasWritten = cpf.length === 11

        if (choiceWasMade && nameWasWritten && cpfWasWritten) {

            const newReservation = { ...reservation, ids: selectedSeats, name: buyerName, cpf: cpf }
            
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", newReservation)
            promise.then(() => {
                const buyerInformation = { ...finalScreenInformation, title: session.movie.title, date: session.day.date, hour: session.name }
                console.log("Foi")
                setInformation(buyerInformation)
                setReservation(newReservation)
                navigate('/sucesso')
            })
            promise.catch((err) => console.log(err.response.data))

        } else {
            alert("Dados incorretos")
        }
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((resp) => {
            console.log(resp.data)
            setSession(resp.data)
        })
    }, [])

    if (session.length === 0) {
        return (<h1>Carregando</h1>)
    }

    return (
        <>
            <SelectYourSeat>{"Selecione o(s) assento(s)"}</SelectYourSeat>
            <SeatsPanel>
                {session.seats.map((s) => <IndividualSeat finalScreenInformation={finalScreenInformation} setInformation={setInformation} setSeats={setSeats} selectedSeats={selectedSeats} key={s.id} avaible={s.isAvailable} id={s.id} name={s.name} />)}
                <ColorLegend>
                    {LEGENDSEATS.map((l) =>
                        <ItemOfLegend>
                            <IndividualSeat key={l.color} id={l.color} avaible={l.avaible} />
                            <p>{l.text}</p>
                        </ItemOfLegend>)}
                </ColorLegend>
            </SeatsPanel>
            <UserDataInputs>
                <form>
                    <label htmlFor="nome" >{"Nome do Comprador:"}</label>
                    <input data-identifier="buyer-name-input" value={buyerName} onChange={(event) => changeBuyerName(event)} id="nome" placeholder="Digite seu nome..."></input>
                    <label htmlFor="CPF">{"CPF do Comprador:"}</label>
                    <input data-identifier="buyer-cpf-input" value={cpf} onChange={(event) => changeCpf(event)} id="CPF" placeholder="Digite seu CPF..."></input>
                </form>
            </UserDataInputs>
            <SubmitButton data-identifier="reservation-btn" onClick={reserve}>
                <p>{"Reservar assento(s)"}</p>
            </SubmitButton>
            <Footer2>
                <MiniOutdoor2>
                    <img alt={session.movie.title} src={session.movie.posterURL} />
                </MiniOutdoor2>
                <div data-identifier="movie-and-session-infos-preview">
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
    margin: 20px auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
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

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`
const SubmitButton = styled.div`
    height: 42px;
    width: 225px;
    margin-bottom: 117px;

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
    
    cursor: pointer;
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
    padding: 5px;
    border-radius: 3px;
    margin:10px;

    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    img{
        width:100%;
    }
`