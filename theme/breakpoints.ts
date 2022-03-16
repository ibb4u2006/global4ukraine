import { createBreakpoints } from "@chakra-ui/theme-tools";
export const BREAKPOINTS = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

export const mediaBreakpointUp = (min: number | string, content: any) => `
      @media (min-width: ${min}px) {
          ${content}
      }
  `;

export const mediaBreakpointDown = (max: number | string, content: any) => `
      @media (max-width: ${max}px) {
          ${content}
      }
  `;

export const mediaBreakpointBetween = (
  min: number | string,
  max: number | string,
  content: any
) => `
      @media (min-width: ${min}px) and (max-width: ${max}px) {
          ${content}
      }
  `;
