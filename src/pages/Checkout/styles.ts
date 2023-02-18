import styled, { css } from "styled-components";


export const WrapperCheckout = styled.div`
    ${({ theme }) => css`
        display: flex;
        gap: 32px;
    `}
`

export const WrapperPaymentAddress = styled.div`
    ${({ theme }) => css`
        .shapeAddress {
            .shape {
                background-color: ${theme["gray-100"]};
                padding: 40px;
                border-radius: 6px;
                width: 640px;
                margin-bottom: 12px;

                .wrapper__header {
                    display: flex;
                    gap: 10px;

                    .icon {
                        color: ${theme["yellow-300"]};
                    }
                    .wrapper__texts {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 32px;
                    }
                }

                .wrapper__fields{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    .cep {
                        max-width: 200px;
                    }

                    .wrapper__number {
                        display: flex;
                        gap: 12px;
                        
                        .number {
                            max-width: 200px;
                        }
                    }

                    .wrapper__neighborhood {
                        display: flex;
                        gap: 12px;

                        .neighborhood {
                            max-width: 200px;
                        }    
                        .uf {
                            width: 60px;
                        }
                    }

                }
            }
        }

        .shapePayment{
            background-color: ${theme["gray-100"]};
            padding: 40px;
            border-radius: 6px;
            width: 640px;
            margin-bottom: 12px;
            
            .wrapper_header {
                display: flex;
                gap: 10px;
                .icon {
                    color: ${theme["purple-200"]};
                }
                .texts {
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    `}
`

export const InputStyles = styled.input`
    ${({ theme }) => css`
        width: 100%;
        height: 42px;
        background-color: ${theme["gray-200"]};
        border: 1px solid ${theme["gray-300"]};
        border-radius: 5px;
        padding: 12px;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 400;
        color: ${theme["black-300"]};
    
        &::placeholder {
            color: ${theme["black-100"]}
        }
    `}
`

export const Title = styled.h4`
    ${({ theme }) => css`
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 18px;
        color: ${theme["black-300"]};
        margin-bottom: 15px;
    `}
`

export const TitleShape = styled.span`
    ${({ theme }) => css`
        font-weight: 400;
        font-size: 16px;
        color: ${theme["black-300"]};
    `}
`

export const SubtitleShape = styled.span`
    ${({ theme }) => css`
        font-weight: 400;
        font-size: 14px;
        color: ${theme["black-200"]};
    `}
`

export const ShapeItems = styled.div`
    gap: 32px;
    background-color: ${({ theme }) => theme["gray-100"]};
    border-radius: 6px 44px;
    padding: 40px;
    
    .items {
        display: flex;
        align-items: center;
        gap: 20px;
        padding-bottom: 32px;
        padding-top: 24px;
        border-bottom: 1px solid ${({ theme }) => theme["gray-300"]};

        &:first-child{
            padding-top: 0;
        }
        
        .img {
            > img {
                width: 64px;
            }
        }
        .buttons{
            display: flex;
            align-items: center;
            width: 50%;
            gap: 8px;
        }
    }
`

export const ButtonRemove = styled.button`
    ${({ theme }) => css`
        height: 38px;
        padding: 8px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        color: ${theme["black-200"]};
        cursor: pointer;
        background-color: ${theme["gray-300"]};
        border: none;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 8px;

        .icon {
            color: ${theme["purple-200"]};
        }
    `}
`

export const ButtonSubmit = styled.button`
    ${({ theme }) => css`
        margin-top: 24px;
        width: 100%;
        height: 46px;
        text-transform: uppercase;
        background-color: ${theme["yellow-200"]};
        color: ${theme["white-100"]};
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
    `}
`