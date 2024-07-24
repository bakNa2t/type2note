import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    &, &.light-mode {
        --background-gradient: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));;

        --color-blue: #3a7bfd;
        --color-blue-dark: #0070f3;

        --color-blue-zola-600: #393a4c;
        --color-blue-zola-700: #25273c;
        --color-blue-light-200: #e4e5f1;
        --color-blue-light-300: #c2c2c2;
        --color-blue-light-700: #777a92;
    }

    &.dark-mode {
        --color-blue-dark: #0070f3;
        --color-blue-zola-600: #25273c;
        --color-blue-zola-700: #393a4c;
        --color-blue-light-200: #e4e5f1;
        --color-blue-light-300: #c2c2c2;
        --color-blue-light-700: #777a92;

    }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Animations for dark mode */
  transition: background-color 0.3s, border 0.3s, color 0.1s;
}

html {
  font-size: 62.5%;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;

    font-family: 'Fira Code', monospace;
    background-color: var(--color-blue-zola-700);
    color: var(--color-blue-light-200);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
`;

export default GlobalStyles;
