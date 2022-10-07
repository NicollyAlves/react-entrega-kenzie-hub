import styled from "styled-components";

export const SectionRegister = styled.section`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    background-color: var(--Grey-4);

    nav {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 20px;
        width: 80%;
        max-width: 250px;
        min-width: 250px;
        margin-top: 30px;

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
        margin-bottom: 30px;
        
        h2 {
            display: flex;
            justify-content: center;
            color: #ffffff;
            font-size: 17px;
            margin-top: 15px;
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
            margin-top: 15px;
            justify-content: center;
            color: var(--Grey-1);
            margin-bottom: 20px;
            font-size: 12px;
        }
        
        select {
            height: 30px;
            color: #ffffff;
            background-color: var(--Grey-2);
            border-radius: 4px;
            border: 2px solid var(--Grey-1);
            margin-bottom: 10px;
        }

        button {
            height: 35px;
            background-color: var(--Color-primary-Negative);
            color: #ffffff;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            margin-bottom: 20px;
        }
    }
`

