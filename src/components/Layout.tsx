import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import BasicButton from "./BasicButton";

type Props = {
  title?: string;
  children?: ReactNode;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();
  const handleRedirect = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        pos={"fixed"}
        bg={"white"}
        maxH={"90px"}
        w={"100%"}
        px={14}
        align={"center"}
        justify={"space-between"}>
        <Image src="/logo.svg" alt="Vercel Logo" width={100} height={100} />
        <Flex gap={4}>
          <BasicButton
            onClick={() => handleRedirect("register")}
            title="Cadastro"
            color="blue.400"
            bg="white"
            borderColor="white"
          />
          <BasicButton
            onClick={() => handleRedirect("login")}
            title="Login"
            color="white"
            bg="blue.400"
            borderColor="blue.400"
          />
        </Flex>
      </Flex>
      <Box minH="100vh" w="100%" bg="gray.200" p={4}>
        <Flex mt={"90px"} w={"100%"} justify={"center"}>
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
