import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    :root {
        --primary-color: #30A2FF;
        --sub-color: #EEEEEE;
        --bg-color: #D9D9D9;
        --text-color: #8F8F90;
    }
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    html, body, #root {
        height: 100%;
    }
    html,
    body,
    body > div { /* the react root */
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        margin: 22px 10px;
        width: 320px;
        height: 568px;
    }
    h2 {
        margin: 0;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0 0 0 1.5em;
    }
    li {
        padding: 0;
    }
    b { 
        margin-right: 3px;
    }
`;

export default GlobalStyles;
