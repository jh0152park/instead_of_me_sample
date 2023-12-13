import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/fonts/pretendard-subset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: white;
    color: #444;
    font-family: "Pretendard",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box; 
    height: 100%;
    line-height: 1.6;
    overflow-x: hidden;
    position:relative;
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
        <GlobalStyle />
        <App />
    </>
);
