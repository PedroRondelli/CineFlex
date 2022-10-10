import styled from "styled-components"
import { Link } from "react-router-dom"

export default function DaySessions({ id, date, showtimes, weekday, title }) {
    
    return (
        <>
            <Day data-identifier="session-date" >{weekday} - {date}</Day>
            <Hours>
                {showtimes.map((show) =>
                    <Link to={`/assentos/${show.id}`}>
                        <Session
                            data-identifier="hour-minute-btn"
                            key={show.id}
                            id={show.id}
                        >{show.name}
                        </Session>
                    </Link>
                )}
            </Hours>
        </>
    )
}

const Day = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;

    margin:8px;
`

const Hours = styled.div`
    display: flex;
    flex-wrap: wrap;

    a{
        text-decoration: none;
    }
`

const Session = styled.div`
    background: #E8833A;
    border-radius: 3px;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: center;
    color:white;

    width: 82px;
    height: 43px;
    margin: 18px 8px 18px 8px;

    cursor:pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`