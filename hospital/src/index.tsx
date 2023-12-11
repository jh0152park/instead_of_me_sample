import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: white;
    color: #444;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box; 
    height: 300vh;
    line-height: 1.6;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <ChakraProvider>
            <GlobalStyle />
            <App />
        </ChakraProvider>
    </>
);
