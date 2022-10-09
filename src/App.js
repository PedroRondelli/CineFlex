import GlobalStyle from './globalstyled';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieChoiceScreen from './MovieChoiceScreen';
import SessionsScreen from './SessionsScreen';
import ChairsScreen from './ChairsScreen';
import SucessScreen from './SucessScreen'
import { useState } from 'react';

export default function App() {
    const [reservation, setReservation] = useState({ ids: [], name: "", cpf: "" })
    const [finalInformation, setInformation] = useState({ title: "", date: "", hour: "" })

    return (
        <BrowserRouter>
            <ScreenContainer>
                <Link to={"/"}><Header><h1>CINEFLEX</h1></Header></Link>
                <Routes>
                    <Route path="/" element={<MovieChoiceScreen />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsScreen />} />
                    <Route path="/assentos/:idSessao" element={
                        <ChairsScreen
                            reservation={reservation}
                            setReservation={setReservation}
                            finalInformation={finalInformation}
                            setInformation={setInformation}
                        />
                    } />
                    <Route path='/sucesso' element={<SucessScreen finalInformation={finalInformation} reservation={reservation} />} />
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
`;




