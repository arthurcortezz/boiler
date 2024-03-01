import { useRouter } from "next/router";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import BasicInput from "../../components/BasicInput";
import BasicButton from "../../components/BasicButton";

const Login = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("dashboard");
  };

  const handleRedirect = (route: string) => {
    router.push(route);
  };
  return (
    <Layout title="Inicio">
      <Box py={"64px"} px={"130px"} w={"40%"} minW={"420px"} alignSelf={"center"} justifySelf={"center"} bg={"white"} borderRadius={"16px"}>
        <Flex w={"100%"} justify={"center"} mb={"32px"}>
          <Image src="/logo.svg" alt="Vercel Logo" width={100} height={100} />
        </Flex>
        <Box w={"100%"}>
          <BasicInput placeholder="Digite seu CPF" title="CPF*" />
          <BasicInput placeholder="Digite sua senha" title="Senha*" password />
          <Link onClick={() => handleRedirect("/forgot-password")}>
            <Text textAlign={"left"} color={"#000"} fontSize={"14px"} fontWeight={700} display={"block"}>
              Esqueci minha senha
            </Text>
          </Link>
          <Box display={"flex"} flexDir={"column"} gap={4} py={4}>
            <BasicButton
              onClick={() => handleSignUp()}
              title="Entrar"
              color={"white"}
              bg={"blue.200"}
              borderColor={"blue.200"}
              w={"100%"}
            ></BasicButton>
            <BasicButton
              onClick={() => handleRedirect("register")}
              title="Criar nova conta"
              color={"blue.200"}
              bg={"white"}
              borderColor={"blue.200"}
              w={"100%"}
            ></BasicButton>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default Login;
