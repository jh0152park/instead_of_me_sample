import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        background-color: whitesmoke;
        color: black;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

  * {
    box-sizing: border-box;
    text-decoration: none;
}
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <GlobalStyle />
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </>
);
