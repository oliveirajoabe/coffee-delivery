import styled from "styled-components";

export const ContainerTag = styled.div`
    span {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme["yellow-300"]};
        background-color: ${({ theme }) => theme["yellow-100"]};
        padding: 4px 8px;
        border-radius: 10px;
    }
`