import styled from "styled-components";

export const SectionDashboard = styled.section`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    background-color: var(--Grey-4);
    min-height: 100vh;
    height: max-content;

    nav {
        display: flex;
        flex-direction: row;
        width: 99vw;
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
        justify-content: space-evenly;
        width: 99vw;
        border-bottom: 1px solid var(--Grey-2);
        height: max-content;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;

        @media screen and (min-width: 768px) {
            flex-direction: row;
        }

        h2 {
            display: flex;
            color: #ffffff;
            font-family: var(--Title1);
            font-size: 18px;
            margin: none;
            justify-content: flex-start;
            align-items: flex-start;
        }

        h3 {
            color: var(--Grey-1);
            font-size: 14px;
            font-family: var(--Title1);
            flex-wrap: wrap;
        }
    }


    main {
        display: flex;
        flex-direction: column;
        line-height: 40px;
        margin-top: 10px;
        width: 100vw;
        font-family: var(--Title1);
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        
        div {
            display: flex;
            border-bottom: none;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 80vw;

            h2 {
                color: #ffffff;
                font-size: 16px;
            }

            button {
                display: flex;
                background-color: var(--Grey-2);
                color: #ffffff;
                border: none;
                border-radius: 4px;
                font-weight: 600;
                padding: 8px;
                height: 28px;
                align-items: center;
                font-size: 18px;
                font-weight: bolder;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            padding: 10px;
            margin: auto;
            width: 80vw;
            align-items: center;
            background-color: var(--Grey-2);
            border-radius: 8px;
            padding: 15px;

            li {
                display: flex;
                background-color: var(--Grey-4);
                height: 40px;
                width: 95%;
                justify-content: space-evenly;
                flex-direction: row;
                padding: 20px;
                align-items: center;
                border-radius: 8px;
                margin-bottom: 10px;
                position: relative;
                justify-content: space-between;

                &:hover {
                    background-color: var(--Grey-1);
                }

                h2 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                }

                div {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    right: 0;

                    h3 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
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

export const Modal = styled.div`
    display: flex;
    position: absolute;
    background-color: #00000090;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    top: 0;
    border-radius: 8px;
    
    form {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 80%;
        max-width: 300px;
        bottom: 50px;
        height: max-content;
        margin-top: 100px;
        background-color: var(--Grey-3);
        border-radius: 8px;
        position: relative;

        div {
            display: flex;
            background-color: var(--Grey-2);
            height: 10px;
            align-items: center;
            flex-direction: row;
            width: 100%;
            max-width: 300px;
            border-radius: 8px 8px 0 0;

            h2 {
                font-size: 16px;
                display: flex;
                margin-left: -20px;
            }

            button {
                background-color: var(--Grey-2);
                color: var(--Grey-1);
                font-size: 20px;
                margin-right: -20px;
            }
        }

        label {
            color: var(--Grey-1);
            font-family: var(--Headline);
            font-size: 14px;
            margin-top: 10px;
            padding-left: 20px;
            margin-bottom: 4px;
        }

        input {
            height: 35px;
            color: #ffffff;
            background-color: var(--Grey-2);
            border-radius: 4px;
            border: 2px solid var(--Grey-1);
            width: 80%;
            max-width: 250px;
            margin: 0 auto;
        }

        select {
            height: 40px;
            color: #ffffff;
            background-color: var(--Grey-2);
            border-radius: 4px;
            border: 2px solid var(--Grey-1);
            width: 80%;
            max-width: 255px;
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
`

export const ButtonModal = styled.button`
    height: 35px;
    background-color: var(--Color-primary);
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 80%;
    max-width: 255px;
    margin: 0 auto;
    margin-bottom: 20px;
`
