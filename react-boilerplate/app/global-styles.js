import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #000000;
  }

  body {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    selection-background-color: #F6C61E;
    selection-color: #000000;
  }

  ::selection {
    background: #F6C61E;
    color: #000000;
  }

  #app {
    background-color: #000000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 800;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 1.1; /* Increased from 0.9/1.0 */
  }

  p,
  label {
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1.6;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    border-radius: 0 !important; /* Forces sharp corners everywhere */
  }

  /* Custom Utilities for Kinetic Noir */
  .glass-morphism {
    background: rgba(14, 14, 14, 0.8);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }
`;

export default GlobalStyle;
