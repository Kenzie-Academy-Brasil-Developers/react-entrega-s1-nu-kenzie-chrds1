import styled from "styled-components";

export const ListStyle = styled.div`
    .container{
        display: flex;
        flex-direction: column;
    }
    .container-botoes{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .container-botoes span{
        font-weight: 700;
        font-size: 1rem;
        color: #212529;
    }
    .container-botoes ul{
        display: inline-flex;
        justify-content: flex-end;
        gap: 5px;
    }
    .container-botoes .botao-filtro{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: #868E96;
        background:#E9ECEF;
        border: none;
        border-radius: .5rem;
        max-width: 33%;
        padding: 0.9rem;
        height: 2.5rem;
        cursor: pointer;
    }
    .container-botoes .botao-filtro:hover{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: #212529;
        background:#868E96;
        border: none;
        border-radius: .5rem;
        max-width: 33%;
        padding: 0.9rem;
        height: 2.5rem;
        cursor: pointer;
    }
    .container-botoes .botao-filtro-todos{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: #ffffff;
        background: #E34981;
        border: none;
        border-radius: .5rem;
        max-width: 33%;
        padding: 0.9rem;
        height: 2.5rem;
        cursor: pointer;
    }
    .container-botoes .botao-filtro-todos:hover{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 500;
        color: #ffffff;
        background: #FD377E;
        border: none;
        border-radius: .5rem;
        max-width: 33%;
        padding: 0.9rem;
        height: 2.5rem;
        cursor: pointer;
    }
    .span-mensagem{
        color: #5b6166;
        font-weight: 700;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`