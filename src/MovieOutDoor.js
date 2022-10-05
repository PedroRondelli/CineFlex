import styled from "styled-components"


export default function MovieOutDoor({ banner, title }) {

    return (
        <Outdoor >
            <img src={banner} alt={title} />
        </Outdoor>
    )
}

const Outdoor = styled.div`
    height: 209px;
    width: 145px;
    box-sizing:border-box;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    padding: 5px;
    border-radius: 3px;
    margin:10px;

    img{
        
        width:100%;
    }

    cursor: pointer;

`