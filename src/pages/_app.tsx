import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalContextProvider } from "../context";
import { useState } from "react";
import { UsersInterface } from "../types/UsersInterface";

const theme = extendTheme({});

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState<UsersInterface | null>(null);
  const queryClient = new QueryClient();
  if (pageProps.protected && !auth) {
    return <>Não autorizado</>;
  }

  return (
    <GlobalContextProvider setAuth={setAuth}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
        <ToastContainer />
      </QueryClientProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
