import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { NavDrawerProvider } from "../contexts/NavDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools" 
import { queryClient } from "../services/QueryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavDrawerProvider>
          <Component {...pageProps} />
        </NavDrawerProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
