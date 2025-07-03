import { extendTheme, type ChakraTheme } from "@chakra-ui/react";

// Generating a new colour pallette?
// https://palette.saas-ui.dev/

const extension: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        a: {
          _focus: {
            boxShadow: "none",
          },
          _focusVisible: {
            outline: "-webkit-focus-ring-color auto 1px",
            outlineOffset: "1px",
          },
        },
      },
      "::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
      },

      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(201, 201, 201)",
        borderRadius: "4px",
      },
      "[data-theme='dark'] ::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(194, 194, 194)",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "rgb(198, 198, 198)",
      },
      "[data-theme='dark'] ::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "rgb(198, 198, 198)",
      },
    },
  },
  fontSizes: {
    "xx-small": "0.68rem",
    // xs: "0.82rem",
  },
  colors: {
    black: "#111317",
    gray: {
      50: "#f9fafa",
      100: "#f0f1f3",
      200: "#e6e7eb",
      300: "#d1d4da",
      400: "#aaadb2",
      500: "#7d7f82",
      600: "#535457",
      700: "#363738",
      800: "#1f2021",
      900: "#19191a",
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    yellow: {
      50: "#FFF8E1",
      100: "#FFECB3",
      200: "#FFE082",
      300: "#FFD54F",
      400: "#FFCA28",
      500: "#FFC107",
      600: "#FFB300",
      700: "#FFA000",
      800: "#FF8F00",
      900: "#FF6F00",
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },
    green: {
      50: "#e6f6ed",
      100: "#c2e7d3",
      200: "#9bd8b7",
      300: "#71ca9c",
      400: "#4fbe87",
      500: "#25b272",
      600: "#1ea367",
      700: "#16915a",
      800: "#107f4e",
      900: "#096039",
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
    success: "#49D0A8",
    warning: "#FA8F64",
    destructive: "#FF6F00",
  },
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
        _focusVisible: {
          outline: "-webkit-focus-ring-color auto 1px",
          outlineOffset: "1px",
        },
      },
      variants: {
        external: {
          color: "blue.500",
          _dark: {
            color: "blue.300",
          },
          _hover: {
            color: "blue.600",
            _dark: {
              color: "blue.400",
            },
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: "gray.800",
        _dark: {
          color: "whiteAlpha.900",
        },
      },
      variants: {
        subtle: {
          color: "gray.600",
          _dark: {
            color: "whiteAlpha.700",
          },
        },
        muted: {
          color: "gray.500",
          _dark: {
            color: "whiteAlpha.700",
          },
        },
        inherit: {
          color: "inherit",
          _dark: {
            color: "inherit",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.800",
        _dark: {
          color: "whiteAlpha.900",
        },
      },
      variants: {
        subtle: {
          color: "gray.600",
          _dark: {
            color: "whiteAlpha.800",
          },
        },
      },
    },
    Button: {
      defaultProps: {
        size: "sm",
      },
      sizes: {
        xs: {
          borderRadius: "md",
          fontSize: "xx-small",
        },
        sm: {
          fontSize: "xs",
          borderRadius: "lg",
          px: 3,
        },
      },
      variants: {
        outline: {
          shadow: "sm",
          bgColor: "white",
          _dark: {
            bgColor: "gray.800",
            borderColor: "gray.600",
            _hover: {
              bg: "gray.700",
            },
          },
        },
        dashed: {
          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: "gray.200",
          bgColor: "gray.50",
          _hover: {
            bgColor: "gray.100",
          },
        },
      },
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
        _focusVisible: {
          outline: "-webkit-focus-ring-color auto 1px",
          outlineOffset: "1px",
        },
      },
    },
  },
};

export const theme = extendTheme(extension);
