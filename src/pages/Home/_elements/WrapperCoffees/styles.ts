import styled from "styled-components";

export const WrapperCoffeesStyles = styled.div` 
    h2 {
        font-family: 'Baloo 2';
        font-size: 32px;
        margin-bottom: 54px;
    }

    .values {
        display: grid;
        grid-template-columns: 256px 256px 256px 256px;
        grid-gap: 11.8%;
        
        @media (max-width:1440px) {
            grid-template-columns: 256px 256px 256px;
            grid-gap: 15%;
        }

        @media (max-width:1024px) {
            grid-template-columns: 256px 256px 256px;
            grid-gap: 7.5%;
        }

        @media (max-width:768px) {
            grid-template-columns: 256px 256px;
            grid-column-gap: 21%;
        }
    }

`