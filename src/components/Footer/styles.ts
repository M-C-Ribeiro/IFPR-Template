import { styled } from "styled-components";

export const Container = styled.header`
    background: #1d5223;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    .page-details {
        h1 {
            color: #fff;
            font-size: 32px;
        }

        h2 {
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }

    .logos {
        
        display: flex;
        gap: 20px; /* Espaçamento entre as linhas */

        ul {
            display: inline-block;
            vertical-align: middle;
            width: 20%;
            margin-right: 15%;
        }
    }
`;