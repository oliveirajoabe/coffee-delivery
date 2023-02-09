import styled from "styled-components"

export const WrapperApresentation = styled.div`
    display: flex;
    
    padding: 92px 0;
    gap: 50px;

    h1 {
        font-family: 'Baloo 2';
        font-size: 48px;
        line-height: 130%;
        font-weight: 800;
    }

    .subtitle {
        font-size: 20px;
        color: ${(props) => props.theme['black-300']};
    }

    .datails {
        display: grid;
        grid-template-columns: 231px 294px;
        gap: 40px;
        margin-top: 60px;

        .icon {
            margin-right: 5px;
            padding: 5px;
            border-radius: 50%;
            fill: ${({ theme }) => theme['white-100']};
        }

        .cart {
            background-color: ${({ theme }) => theme['yellow-300']};
        }

        .package{
            background-color: ${({ theme }) => theme['black-200']};
        }

        .timer{
            background-color: ${({ theme }) => theme['yellow-200']};
        }

        .coffee{
            background-color: ${({ theme }) => theme['purple-200']};
        }

        span {
            font-size: 16px;
            color: ${(props) => props.theme['black-200']};
            display: flex;
            align-items: center;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 30px;
        }
        .subtitle {
            font-size: 18px;
        }
        img{
            height: 240px;
        }
    }
`