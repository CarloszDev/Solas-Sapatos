import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #fff;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Jolly Lodger';
    font-style: normal;
    font-weight: normal;
    src: url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap');
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    src: url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  }

  @font-face {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    // background-color: red;
    font-family: 'Barlow', sans-serif;
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

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export const StyledLink = styled.a`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  &:hover {
    color: #535bf2;
  }
`;

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const LightModeStyles = createGlobalStyle`
  body {
    background-color: #ffffff;
    color: #213547;
  }

  ${StyledLink} {
    &:hover {
      color: #747bff;
    }
  }

  ${StyledButton} {
    background-color: #f9f9f9;
  }
`;
