import { Breakpoints, createGlobalStyle, css } from "../theme/";
import { mediaBreakpointDown } from "../theme/breakpoints";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Mulish", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1, h2, h3, h4, h5, h6, li {
  font-family: "Lora", "sans-serif";
  color: ${(props: any) => props.theme.colors.primary};
  margin: 0;
}

h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 57.6px;
}

h3, li {
    font-size: 22px;
    line-height: 30.8px;
}

h4 {
  font-size: 18px;
  line-height: 25.2px;
}

h5 {
  font-size: 16px;
  line-height: 22.4px;
}

p {
  margin: 0;
  color: ${(props: any) => props.theme.colors.veryDark};
}

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
    opacity: 0.8;
  }
}

.slick-list {
	padding: 40px 0;
}

.slick-next, .slick-prev {
  z-index: 1;
}

.slick-next {
  right: 0;
}

.slick-prev {
  left: 0;
}

.slick-prev:before, .slick-next:before {
  color: ${(props: any) => props.theme.colors.primary};
}

.gallery-container {
  >div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    >img {
      cursor: pointer;
    }
  }
}

${mediaBreakpointDown(
  Breakpoints.BREAKPOINTS.lg,
  css`
    h1 {
      font-size: 2.5rem;
    }
  `
)}

`;

export default GlobalStyle;
