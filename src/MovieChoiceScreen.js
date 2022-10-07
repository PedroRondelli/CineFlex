import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MovieOutDoor from "./MovieOutDoor"



export default function MovieChoiceScreen() {
    const [receivedMovies, setReceivedMovies] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((resp) => {
            setReceivedMovies(resp.data)
        })

    }, [])

    return (
        <>
        <SelectYourMovie>Selecione o filme</SelectYourMovie>
        <MoviesScroll>
            {receivedMovies.map((objectOfMovie) => {
                return (
                    <MovieOutDoor
                        key={objectOfMovie.id}
                        banner={objectOfMovie.posterURL}
                        title={objectOfMovie.title}
                        id={objectOfMovie.id}
                    />
                )
            })}
        </MoviesScroll>
        </>
    )
}

const MoviesScroll = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 90vw;
`
const SelectYourMovie = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin: 50px 0;

`