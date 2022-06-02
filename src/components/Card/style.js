import styled from 'styled-components'

export const CardStyle = styled.div`
    .container-card{
        width: 100vw;
        max-width: 100%;
        background-color: #F8F9FA;
        border-radius: 0.3rem;
        border-left: 0.5rem solid ${(props) => props.colorBorder};
        height: 5rem;
        padding: 1rem;
        margin: 1rem auto;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        box-sizing: border-box;
    }
    .descricao{
        display: flex;
        flex-direction: column;
        width: ${(props=> props.descricaoWidth)};
        gap: 0.75rem
    }
    .descricao h2{
        width: 100%;
        color: #212529;
        background-color: ${(props=> props.descricaoBackground)};
        height: 0.9rem;
        color: #212529;
        font-size: 1rem;
        font-weight: 700;
    }
    .descricao span{
        width: 50%;
        background-color: ${(props=> props.descricaoBackground)};
        height: 0.9rem;
        color: #5B6166;
        font-size: .75rem;
        font-weight: 400;
    }
    .value{
        color: #212529;
        font-size: .75rem;
        font-weight: 400;
    }
    .trash{
        background-color: ${(props=> props.trash)};
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trash .icon{
        width: .5rem;
        height: .5rem;
        color: #5B6166;
    }
`