import styled from "styled-components"
import { Link } from "react-router-dom"


export default function MovieOutDoor({ banner, title, id }) {
    return (
        <Link to={`/sessoes/${id}`}>
            <Outdoor data-identifier="movie-outdoor">
                <img src={banner} alt={title} />
            </Outdoor>
        </Link>
    )
}

const Outdoor = styled.div`
    height: 209px;
    width: 145px;
    box-sizing:border-box;
    padding: 5px;
    border-radius: 3px;
    margin:10px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    img{
        width:100%;
    }

    cursor: pointer;
`