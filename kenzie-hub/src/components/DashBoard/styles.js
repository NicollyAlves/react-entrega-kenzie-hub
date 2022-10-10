import styled from "styled-components";

export const SectionDashboard = styled.section`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    background-color: var(--Grey-4);
    height: 100vh;

    nav {
        display: flex;
        flex-direction: row;
        width: 100vw;
        justify-content: space-around;
        padding-bottom: 20px;
        margin-top: 30px;
        border-bottom: 1px solid var(--Grey-2);

        button {
            height: 35px;
            background-color: var(--Grey-2);
            color: #ffffff;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            padding: 7px;
            width: max-content;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100vw;
        border-bottom: 1px solid var(--Grey-2);
        height: max-content;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;

        @media screen and (min-width: 768px) {
            flex-direction: row;
        }

        h2 {
            color: #ffffff;
            font-family: var(--Title1);
            font-size: 18px;
        }

        h3 {
            color: var(--Grey-1);
            font-size: 14px;
            font-family: var(--Title1);
        }
    }


    section {

        display: none;
        
        @media screen and (min-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            line-height: 40px;
            margin-top: 10px;
            font-family: var(--Title1);
            
            h2 {
                color: #ffffff;
                font-size: 18px;
            }

            h3 {
                color: var(--Grey-1);
                font-size: 16px;
                font-family: var(--Headline);
                font-weight: 500;
            }
        }
    }
`