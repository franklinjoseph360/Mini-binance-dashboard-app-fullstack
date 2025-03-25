import { createGlobalStyle } from 'styled-components';
import TeXGyreAdventorBold from '../assets/fonts/texgyreadventor-bold.woff';
import TexgyreadventorBoldItalic from '../assets/fonts/texgyreadventor-bolditalic.woff';
import TexgyreadventorItalic from '../assets/fonts/texgyreadventor-italic.woff';
import TeXGyreAdventorRegular from '../assets/fonts/texgyreadventor-regular.woff';

import { colors, fontFamily, fontWeight, fontStyle, animations } from '@styles/variables';

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
    width: 100%;
  }

  @font-face {
    font-family: ${fontFamily.primary};
    font-weight: ${fontWeight.normal};
    font-style: ${fontStyle.normal};
    src: url(${TeXGyreAdventorRegular}) format('woff');
  }

  @font-face {
    font-family: ${fontFamily.primary};
    font-weight: ${fontWeight.normal};
    font-style: ${fontStyle.italic};
    src: url(${TexgyreadventorItalic}) format('woff');
  }

  @font-face {
    font-family: ${fontFamily.primary};
    font-weight: ${fontWeight.bold};
    font-style: ${fontStyle.normal};
    src: url(${TeXGyreAdventorBold}) format('woff');
  }

  @font-face {
    font-family: ${fontFamily.primary};
    font-weight: ${fontWeight.bold};
    font-style: ${fontStyle.italic};
    src: url(${TexgyreadventorBoldItalic}) format('woff');
  }

  body {
    font-family: ${fontFamily.primary};
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spin {
    animation: ${animations.spin.name} ${animations.spin.duration} ${animations.spin.timingFunction} ${animations.spin.iterationCount};
  }

  @keyframes ${animations.spin.name} {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  a {
    font-weight: 500;
    color: ${colors.anchor.primary};
    text-decoration: inherit;
  }

  a:hover {
    color: ${colors.anchor.secondary};
  }
`;

export default GlobalStyle;
