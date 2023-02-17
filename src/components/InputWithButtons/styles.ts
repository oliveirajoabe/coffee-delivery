import styled from "styled-components";


export const WrapperInputAddQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme["gray-300"]};
    border-radius: 5px;
    padding: 0 9px;

    .icon {
        fill: ${({ theme }) => theme["purple-300"]};
        cursor: pointer;
    }
`

export const InputStyles = styled.input`
    text-align: center;
    width: 30px;
    height: 38px;
    border: none;
    background-color: ${({ theme }) => theme["gray-300"]};

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
`