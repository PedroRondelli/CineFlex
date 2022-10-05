import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MovieOutDoor from "./MovieOutDoor"



export default function MovieChoiceScreen() {
    const [receivedMovies, setReceivedMovies] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((resp) => {
            console.log(resp.data)
            setReceivedMovies(resp.data)
        })

    }, [])

    return (
        <MoviesScroll>
            {receivedMovies.map((objectOfMovie) => {
                return (
                    <MovieOutDoor
                        key={objectOfMovie.id}
                        banner={objectOfMovie.posterURL}
                        title={objectOfMovie.title}
                    />
                )
            })}
        </MoviesScroll>
    )
}

const MoviesScroll = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 90vw;
`