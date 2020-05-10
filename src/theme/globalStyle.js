import styled, {createGlobalStyle} from "styled-components";


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

export const SectionTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  color: ${(props) => props.theme.secondary};
  margin-left: 10%;
  margin-bottom: 3%;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
  }
`;

export const Line = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${(props) => props.theme.secondary};
    margin: 5% 0;
    margin-bottom: 3%;
    padding: 0;
}`;

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
