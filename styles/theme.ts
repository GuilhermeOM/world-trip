import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      "400": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
    },
    black: {
      "600": "#47585B"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "white.400",
        color: "black.600",
      },
    },
  },
})