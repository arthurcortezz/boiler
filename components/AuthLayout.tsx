import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BasicButton from "./BasicButton";
import { useRouter } from "next/router";

type Props = {
  title: string;
  children?: ReactNode;
};

const AuthLayout = ({ children, title }: Props) => {
  const router = useRouter();
  const handleRedirect = (route: string) => {
    router.push(route);
  };

  const menus = [
    {
      title: "Início",
      route: "/dashboard",
    },
    {
      title: "Usuários",
      route: "/users",
    },
  ];
  return (
    <Flex minH="100vh" w={"100%"}>
      <Box bg={"blue.200"} w={"100%"} maxW={"220px"}>
        {title && (
          <Text textAlign={"center"} color={"white"} fontSize={"22px"} fontWeight={700} mb={20} pt={8}>
            {title}
          </Text>
        )}
        {menus.map((menu, index) => {
          return (
            <BasicButton
              key={index}
              w={"100%"}
              onClick={() => handleRedirect(menu.route)}
              title={menu.title}
              color="white"
              bg="blue.400"
              borderColor="blue.200"
            />
          );
        })}
      </Box>
      {children}
    </Flex>
  );
};

export default AuthLayout;
