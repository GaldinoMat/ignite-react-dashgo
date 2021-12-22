import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { NavDrawerProvider } from "../contexts/NavDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavDrawerProvider>
          <Component {...pageProps} />
        </NavDrawerProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
