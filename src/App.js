import styled from 'styled-components';
import GlobalStyle from './globalstyled';
import MovieChoiceScreen from './MovieChoiceScreen';




export default function App() {
    return (
        <ScreenContainer>
            <Header><h1>CINEFLEX</h1></Header>
            <p>Selecione o filme</p>
            <MovieChoiceScreen/>
            <GlobalStyle />
        </ScreenContainer>
    )
}


const Header = styled.div`
    position:fixed;
    top:0;
    left:0;

    height: 67px;
    width: 100vw;

    background-color: #c3cfd9;

    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    
    display:flex;
    justify-content:center;
    align-items: center;
    


`;
const ScreenContainer = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0px;
    padding: 0px;
    padding-top: 67px;

    p{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin: 50px 0;
    }

`




