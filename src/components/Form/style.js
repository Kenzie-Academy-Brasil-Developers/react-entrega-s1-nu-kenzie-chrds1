import styled from 'styled-components'

export const FormStyle = styled.div`
    form{
        border-radius: .4rem;
        border: 1px solid #E9ECEF;
        width: 100vw;
        max-width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'Inter';
    }
    .container-descricao{
        font-family: 'Inter';
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
    }
    .container-descricao label{
        font-family: 'Inter';
        font-size: 0.75rem;
        font-weight: 400;
        color: #212529;
        margin-bottom: 0.75rem;
    }
    .container-descricao input{
        border: none;
        box-sizing: border-box;
        width: 100vw;
        height: 3rem;
        max-width: 100%;
        padding: 0 1rem;
        background: #F8F9FA;
        color: #868E96;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 400;
    }
    .container-descricao span{
        font-family: 'Inter';
        font-size: 0.75rem;
        font-weight: 400;
        color: #868E96;
        margin-top: 0.3rem;
    }
    .container-div{
        display: inline-flex;
        align-items: baseline;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .container-valor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100vw;
        max-width: 45%;
    }
    .container-valor label{
        font-family: 'Inter';
        font-size: 0.75rem;
        font-weight: 400;
        color: #212529;
        margin-bottom: 0.75rem;
    }
    .container-valor input{
        border: none;
        box-sizing: border-box;
        width: 100vw;
        height: 3rem;
        max-width: 100%;
        padding: 0 1rem;
        background: #F8F9FA;
        color: #868E96;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 400;
    }
    .container-tipo{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        max-width: 50%;
    }
    .container-tipo label{
        font-family: 'Inter';
        font-size: 0.75rem;
        font-weight: 400;
        color: #212529;
        margin-bottom: 0.75rem;
    }
    .container-tipo select{
        border: none;
        box-sizing: border-box;
        width: 100vw;
        height: 3rem;
        max-width: 100%;
        padding: 0 1rem;
        background: #F8F9FA;
        color: #868E96;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 400;
    }
    button{
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: #ffffff;
        background: #FD377E;
        margin-top: 1rem;
        border: none;
        border-radius: 4px;
        width: 100vw;
        max-width: 100%;
        height: 3rem;
    }
`
