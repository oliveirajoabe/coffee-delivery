import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
    > nav {
        display: flex;
        justify-content: space-between;

        .wrapper__location-checkout {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .cart-link {
                padding: 8px;
                background-color: ${(props) => props.theme['yellow-100']};
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                
                .cart {
                    fill: ${(props) => props.theme['yellow-300']};
                }
            }
        }
    }
`

export const TotalCart = styled.div`
    ${({ theme }) => css`
        text-align: center;

        background-color: ${theme['yellow-300']};
        border-radius: 50%;
        
        padding: 5px 8px;
        font-size: 12px;

        position: absolute;
        top: 20px;
        right: 152px;
        font-weight: 700;
        color: ${theme['white-100']}
    `
    }
`

export const BoxLocation = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['purple-100']};
    padding: 10px;
    border-radius: 5px;
    gap: 5px;

    span {
        color: ${(props) => props.theme['purple-300']};
    }
    .pin{
        fill: ${(props) => props.theme['purple-200']};
    }
`