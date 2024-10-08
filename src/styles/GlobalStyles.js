import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    &, &.light-mode {
        --background-gradient: linear-gradient(hsl(157, 100%, 49%), hsl(106, 29%, 37%));

        --backdrop-color: rgba(255, 255, 255, 0.1);

        //ebony
        --color-ebony-100:#e3e6e1;
        --color-ebony-200:#c8ccc3;
        --color-ebony-300:#a4aa9e;
        --color-ebony-400:#7f8879;
        --color-ebony-500:#646d5f;
        --color-ebony-600:#555d50;
        --color-ebony-700:#42473e;
        --color-ebony-800:#363b34;
        --color-ebony-900:#2f332e;

        //spring green
        --color-spring-green-100:#d5ffef;
        --color-spring-green-200:#aeffe0;
        --color-spring-green-300:#70ffc9;
        --color-spring-green-400:#2bfdac;
        --color-spring-green-500:#00fa9a;
        --color-spring-green-600:#00c072;
        --color-spring-green-700:#00965c;
        --color-spring-green-800:#06754c;
        --color-spring-green-900:#076040;
    }

    &.dark-mode {
        /* --color-blue-zola-600: #25273c;
        --color-blue-zola-700: #393a4c;
        --color-blue-light-200: #777a92;
        --color-blue-light-300: #c2c2c2;
        --color-blue-light-700: #e4e5f1; */

        --color-ebony-100:#2f332e;
        --color-ebony-200:#363b34;
        --color-ebony-300:#42473e;
        --color-ebony-400:#555d50;
        --color-ebony-500:#646d5f;
        --color-ebony-600:#7f8879;
        --color-ebony-700:#a4aa9e;
        --color-ebony-800:#c8ccc3;
        --color-ebony-900:#e3e6e1;
        
        --color-spring-green-100:#076040;
        --color-spring-green-200:#06754c;
        --color-spring-green-300:#00965c;
        --color-spring-green-400:#00c072;
        --color-spring-green-500:#00fa9a;
        --color-spring-green-600:#2bfdac;
        --color-spring-green-700:#70ffc9;
        --color-spring-green-800:#aeffe0;
        --color-spring-green-900:#d5ffef;
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
    width: 100%;
    line-height: 1.5;
    font-size: 1.6rem;

    font-family: 'Fira Code', monospace;
    background-color: var(--color-ebony-100);
    color: var( --color-spring-green-800);
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

&::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-ebony-800);
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-ebony-200);
    border-radius: 0.5rem;
  }
`;

export default GlobalStyles;
