import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import BasicButton from "./BasicButton";

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
          <Text
            pt={8}
            mb={20}
            color={"white"}
            fontWeight={700}
            fontSize={"22px"}
            textAlign={"center"}>
            {title}
          </Text>
        )}
        {menus.map((menu, index) => {
          return (
            <BasicButton
              key={index}
              w={"100%"}
              color="white"
              bg="blue.400"
              title={menu.title}
              borderColor="blue.200"
              onClick={() => handleRedirect(menu.route)}
            />
          );
        })}
      </Box>
      {children}
    </Flex>
  );
};

export default AuthLayout;
