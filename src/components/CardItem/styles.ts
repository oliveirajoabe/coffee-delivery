import styled from "styled-components";

export const ShapeCardItem = styled.div`
    width: 256px;
    height: 310px;
    background-color: ${({ theme }) => theme["gray-100"]};

    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    padding: 0 20px;

    h3 {
        font-family: "Baloo 2";
        text-align: center;
        font-size: 20px;
        font-weight: 700;
    }

    > span {
        text-align: center;
        color: ${({ theme }) => theme["black-100"]};
        font-size: 14px;
        font-weight: 400;
        margin-top: 8px;
    }
`

export const ImageArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -20px;
    img {
        width: 120px;
        height: 120px;
    }

`

export const TagArea = styled.div`
    display: grid;
    grid-template-columns: 71px 81px 72px;
    gap: 4px;
    margin-top: 12px;
    margin-bottom: 16px;
`

export const WrapperValue = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 35px;

    div > span {
        font-size: 15px;
        color: ${({ theme }) => theme["black-200"]};
        strong {
            font-size: 24px;
            font-family: "Baloo 2";
        }
    }
`

export const ButtonAddToCart = styled.button`
    display: flex;
    border: none;
    padding: 8px;
    background-color: ${({ theme }) => theme["purple-300"]};
    border-radius: 5px;
    cursor: pointer;
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    .cart {
        fill: ${({ theme }) => theme["white-100"]};
    }
`