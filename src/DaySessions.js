import styled from "styled-components"

export default function DaySessions() {
    return(
        <>
        <Day>Quinta-feira - 24/06/2021</Day>
        <Hours>
            <Session>15:00</Session>
            <Session>15:00</Session>
            <Session>15:00</Session>
        </Hours>
        </>
    )
}

const Day =styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;

    margin:10px;

`
const Hours=styled.div`
    display: flex;
    flex-wrap: wrap;

    margin: 10px;
`
const Session=styled.button`
    background: #E8833A;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: center;
    color:white;

    width: 82px;
    height: 43px;

    border-radius: 3px;

`