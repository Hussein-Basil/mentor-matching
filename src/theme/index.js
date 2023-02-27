import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      // brand: {
      //   50: "#f5fee5",
      //   100: "#e1fbb2",
      //   200: "#cdf781",
      //   300: "#b8ee56",
      //   400: "#a2e032",
      //   500: "#8ac919",
      //   600: "#71ab09",
      //   700: "#578602",
      //   800: "#3c5e00",
      //   900: "#203300",
      // },
      brand: {
        50: "#EBF8FF",
        100: "#BEE3F8",
        200: "#90CDF4",
        300: "#63B3ED",
        400: "#4299E1",
        500: "#3182CE",
        600: "#2B6CB0",
        700: "#2C5282",
        800: "#2A4365",
        900: "#1A365D",
      },
    },
    fonts: {
      heading: `Montserrat , ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;
