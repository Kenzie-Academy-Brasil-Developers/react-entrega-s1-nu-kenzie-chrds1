import styled from 'styled-components'

export const CardStyle = styled.div`
    .container-card{
        width: 100vw;
        max-width: 100%;
        background-color: #F8F9FA;
        border-radius: 0.3rem;
        border-left: 0.4rem solid ${(props) => props.colorBorder};
        margin: 1rem auto;
        display: inline-flex;
        justify-content: space-between;
        gap: 5px;
    }
    .descricao{
        display: flex;
        flex-direction: column;
        width: ${(props=> props.descricaoWidth)};
    }
    .descricao h2{
        color: #212529;
        background-color: ${(props=> props.descricaoBackground)};
    }
    
`