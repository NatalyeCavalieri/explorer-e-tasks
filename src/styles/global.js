import { createGlobalStyle } from "styled-components";
import { LAYOUT_BREAKPOINTS } from "./layoutBreakPoints"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 :root{
  font-size: 16px;
  @media (max-width: ${LAYOUT_BREAKPOINTS.MD}){
      font-size: 12px;
  }
 }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    outline: none;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #09090A;
  }
`