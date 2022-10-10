import styled from "styled-components";

export const SectionLogin = styled.section`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: var(--Grey-4);
    
    img {
        padding: 20px;
        margin-top: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 250px;
        min-width: 250px;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        font-family: var(--Title1);
        background-color: var(--Grey-3);
        height: max-content;
        border-radius: 4px;
        
        h2 {
            display: flex;
            justify-content: center;
            color: #ffffff;
            font-size: 18px;
        }

        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }

        label {
            margin-bottom: 5px;
            color: var(--Grey-1);
            font-size: 13px;
        }

        input {
            height: 30px;
            color: #ffffff;
            background-color: var(--Grey-2);
            border-radius: 4px;
            border: 2px solid var(--Grey-1);
        }

        span {
            color: var(--Grey-1);
            font-size: 11px;
            margin-top: 2px;
        }

        p {
            display: flex;
            justify-content: center;
            color: var(--Grey-1);
            margin-bottom: 15px;
        }

        h4 {
            height: 35px;
            background-color: var(--Grey-2);
            color: #ffffff;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            margin-bottom: 20px;
            max-width: 250px;
            min-width: 250px;
            width: 80%;
            text-decoration: none;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

export const Button = styled.button`
    height: 35px;
    background-color: var(--Color-primary);
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    margin-bottom: 20px;
`

