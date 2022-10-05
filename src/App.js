import styled from 'styled-components';
import GlobalStyle from './globalstyled';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieChoiceScreen from './MovieChoiceScreen';
import SessionsScreen from './SessionsScreen';




export default function App() {
    return (
        <BrowserRouter>
            <ScreenContainer>
                <Header><h1>CINEFLEX</h1></Header>
                <Routes>
                   <Route path="/" element={<MovieChoiceScreen />}/>
                   <Route path="/sessoes" element={<SessionsScreen />}/>
                </Routes>
            </ScreenContainer>
            <GlobalStyle />
        </BrowserRouter>
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
`




