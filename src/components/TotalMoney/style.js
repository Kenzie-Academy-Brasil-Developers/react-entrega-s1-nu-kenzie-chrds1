import styled from "styled-components";

export const TotalStyle = styled.div`
    .container{
        display: inline-flex;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: .4rem;
        border: 1px solid #E9ECEF;
        width: 100vw;
        max-width: 100%;
        padding: 1rem;
        margin-top: 1rem;
    }
    .container span{
        font-weight: 700;
        font-size: 1rem;
        color: #FD377E;
    }
    .container-descricao{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .container-descricao h3{
        font-weight: 700;
        font-size: 1rem;
        color: #212529;
    }
    .container-descricao span{
        font-weight: 400;
        font-size: .75rem;
        color: #5B6166;
    }
    


`