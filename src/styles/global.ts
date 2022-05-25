import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --background: #f2f8f5;
  --blue:#0D99FF;
  --red:#F44336;
  --blue-light:#6933ff;
  --text-title:#363f5f;
  --text-body:#969cb3;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  @media  (max-width:1080px) {
    font-size: 93.75%;
  }

  @media  (max-width:780px) {
    font-size: 87.5%;
  }
}

body{
  background-color: var(--background);
  -webkit-font-smoothing:antialiased;
}

body,input,button,textArea{
  font-family: 'Poppins',sans-serif;
  font-weight:400;
}

h1,h2,h3,h4,h5,h6,strong{
  font-weight:600;
}

button{
  cursor: pointer;
}

[disable]{
  opacity: 0.6;
  cursor: not-allowed;
}

`