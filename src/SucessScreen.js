import styled from "styled-components"

export default function SucessScreen() {
    return (
        <>
            <SuccessfulOrder><p>Pedido feito</p><p>com sucesso!</p></SuccessfulOrder>
            <Ticket>
                <div>
                    <strong>Filme e sessão</strong>
                    <p>titulo do filme</p>
                    <p>data hora</p>
                </div>
                <div>
                    <strong>Ingressos</strong>
                    <p>Assento numerodacadeira </p>
                    <p>Assento numerodacadeira</p>
                </div>
                <div>
                    <strong>Comprador</strong>
                    <p>Nome: nome</p>
                    <p>CPF: cpf formatado</p>
                </div>
            </Ticket>
            <BackToHome>Voltar pra Home</BackToHome>

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