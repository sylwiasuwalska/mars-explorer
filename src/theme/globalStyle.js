import {createGlobalStyle} from "styled-components";


export const light = {
    primary: "#111111",
    secondary: "#1A1A1A",
    danger: "#8301FE",
    light: "#f4f4f4",
    dark: "#999999",
    backgroundColor: "#f4f4f4",
};

export const dark = {
    primary: "#999999",
    secondary: "#FFFFFF",
    danger: "#8301FE",
    light: "#1A1A1A",
    dark: "#111111",
    backgroundColor: "#000",
};

const GlobalStyle = createGlobalStyle`
  

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.backgroundColor};
    
    @media (max-width: 768px) {
      text-align: center;
    }

  }
 
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyle;
