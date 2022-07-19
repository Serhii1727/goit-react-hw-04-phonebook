import styled from "styled-components";

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Button = styled.button`
    cursor: pointer;
    height: 30px;
    border-radius: 5px;
    border: none;

    :hover {
        background-color: rgb(88, 240, 240);
        color: white;
        transform: scale(1.15);
    }
`