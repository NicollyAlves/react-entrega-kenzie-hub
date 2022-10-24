import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;

        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;

        --Success: #3FE864;
        --Negative: #E83F5B;

        --Title1: "Inter:wght@700", sans-serif;
        --Title2: "Inter:wght@700s", sans-serif;
        --Headline: "Inter:wght@400", sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        list-style: none;
        border: none;
    }

`

export default GlobalStyle