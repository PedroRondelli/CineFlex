import styled from "styled-components"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import DaySessions from "./DaySessions"

export default function SessionsScreen() {

  const { idFilme } = useParams()
  const[movieSessionsAndDetails, setSessionsAndDetails]=useState({})
  const MutableObject= useRef([])
  let daysOfWeek=MutableObject.current
  
  useEffect(()=>{
    const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    promise.then((resp)=> {
      MutableObject.current = resp.data.days
      setSessionsAndDetails(resp.data)
    })
  },[])
  
  return (
    <>
      <SelectYourSession>Selecione o Horário</SelectYourSession>
      <SessionOptions>
        {daysOfWeek.map((objectOfDay)=> 
          <DaySessions
            key={objectOfDay.id}
            weekday={objectOfDay.weekday}
            showtimes={objectOfDay.showtimes}
            date={objectOfDay.date}
            id={objectOfDay.id}
            title={movieSessionsAndDetails.title}
          />
        )}
        <Footer>
        <MiniOutdoor data-identifier="movie-img-preview">
          <img src={movieSessionsAndDetails.posterURL} alt={movieSessionsAndDetails.title}/>
        </MiniOutdoor>
        <p data-identifier="movie-and-session-infos-preview" >{movieSessionsAndDetails.title}</p>
        </Footer>
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
const Footer = styled.div`
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
const MiniOutdoor = styled.div`
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


