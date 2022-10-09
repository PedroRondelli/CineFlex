import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SucessScreen({finalInformation,reservation,setReservation,setInformation}) {

    let navigate=useNavigate()

    function restartOrder() {
        const objetobase= { ids: [], name: "", cpf: "" }
        const objetobase2={ title: "", date: "", hour: "",seats:[] }
        setReservation(objetobase)
        setInformation(objetobase2)
        navigate("/")
    }
    
    return (
        <>
            <SuccessfulOrder><p>Pedido feito</p><p>com sucesso!</p></SuccessfulOrder>
            <Ticket>
                <div>
                    <strong>Filme e sessão</strong>
                    <p>{finalInformation.title}</p>
                    <p>{`${finalInformation.date} ${finalInformation.hour}`}</p>
                </div>
                <div>
                    <strong>Ingressos</strong>
                    {finalInformation.seats.map((s)=><p>{`Assento ${s}`}</p>)}
                </div>
                <div>
                    <strong>Comprador</strong>
                    <p>Nome: {reservation.name}</p>
                    <p>CPF: {reservation.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
                </div>
            </Ticket>
            <BackToHome onClick={restartOrder} >Voltar pra Home</BackToHome>
        

        </>
    )
}

const SuccessfulOrder = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    color:#247a6b;

    
    text-align: center;
    

    margin: 50px 0;
`
const Ticket = styled.div`
    width: 90vw;

    text-align: left;

    p{
        margin: 20px 0;
        font-family: Roboto;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;


    }
    
    div{
        margin-bottom:30px;
    }

`
const BackToHome = styled.div`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    color:white;
    margin-bottom: 117px;
    cursor: pointer;

`