import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import DaySessions from "./DaySessions"

export default function SessionsScreen() {
  const { idFilme } = useParams()
  const[receivedSessions, setReceivedSessions]=useState({})

  useEffect(()=>{
    const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    promise.then((resp)=> {
      console.log(resp.data)
      setReceivedSessions(resp.data)
    })
  },[])
  return (
    <>
      <SelectYourSession>Selecione o Horário</SelectYourSession>
      <SessionOptions>
        <DaySessions />
        <DaySessions />
        <DaySessions />
        {/*footer contendo */}
      </SessionOptions>

    </>
  )
}

const SelectYourSession = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin: 50px 0 25px 0;

`
const SessionOptions = styled.div`
    width: 90vw;
`