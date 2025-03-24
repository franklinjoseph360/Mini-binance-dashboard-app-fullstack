import { createGlobalStyle } from 'styled-components';
import TeXGyreAdventorBold from '../assets/fonts/texgyreadventor-bold.woff';
import TexgyreadventorBoldItalic from '../assets/fonts/texgyreadventor-bolditalic.woff';
import TexgyreadventorItalic from '../assets/fonts/texgyreadventor-italic.woff';
import TeXGyreAdventorRegular from '../assets/fonts/texgyreadventor-regular.woff';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    #root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

     @font-face {
        font-family: 'TeXGyreAdventor';
        font-weight: 400;
        font-style: normal;
        src: url(${TeXGyreAdventorRegular}) format('woff');
    }
    
    @font-face {
        font-family: 'TeXGyreAdventor';
        font-weight: 400;
        font-style: italic;
        src: url(${TexgyreadventorItalic}) format('woff');
    }
    

    @font-face {
        font-family: 'TeXGyreAdventor';
        font-weight: 700;
        font-style: normal;
        src: url(${TeXGyreAdventorBold}) format('woff');
    }
    

    @font-face {
        font-family: 'TeXGyreAdventor';
        font-weight: 700;
        font-style: italic;
        src: url(${TexgyreadventorBoldItalic}) format('woff');
    }

    body {
        font-family: 'TeXGyreAdventor', sans-serif;
        background-color: #202630;
        color: #e0e0e0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 10px;
    }

    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }

    a:hover {
        color: #535bf2;
    }
    
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover {
        border-color: #646cff;
    }

    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;

export default GlobalStyle;
