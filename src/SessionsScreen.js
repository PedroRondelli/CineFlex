import styled from "styled-components"
import DaySessions from "./DaySessions"

export default function SessionsScreen() {
  return(
    <>
    <SelectYourSession>Selecione o Horário</SelectYourSession>
    <SessionOptions>
        <DaySessions/>
        <DaySessions/>
        <DaySessions/>
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
    margin: 50px 0;

`
const SessionOptions=styled.div`
    width: 90vw;
`