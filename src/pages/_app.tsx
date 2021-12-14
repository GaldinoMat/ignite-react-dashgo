import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { NavDrawerProvider } from "../contexts/NavDrawerContext"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavDrawerProvider>
        <Component {...pageProps} />
      </NavDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
