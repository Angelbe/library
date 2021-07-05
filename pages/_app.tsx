import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppWrapper } from "src/utilities/Context";
import { ThemeProvider } from "styled-components";
import { theme } from "src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  );
}
export default MyApp;
