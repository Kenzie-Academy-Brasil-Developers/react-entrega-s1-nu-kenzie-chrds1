import styled from 'styled-components'

export const CardStyle = styled.div`
    .container-card{
        width: 100%;
        max-width: 95%;
        background-color: #F8F9FA;
        border-radius: 4px;
        border-left: 4px solid ${(props) => props.colorBorder};
        margin: 10px auto;
        display: inline-flex;
        gap: 5px;
    }
    .descricao{
        display: flex;
        flex-direction: column;

    }
    
`