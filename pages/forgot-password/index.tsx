import { Box, Flex, Image, Input, Link, Text, useBoolean } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import BasicInput from "../../components/BasicInput";

const ForgotPassword = () => {
  return (
    <Layout title="Inicio">
      <Box py={"64px"} px={"130px"} w={"40%"} minW={"420px"} alignSelf={"center"} justifySelf={"center"} bg={"white"} borderRadius={"16px"}>
        <Flex w={"100%"} justify={"center"} mb={"32px"}>
          <Image src="/logo.svg" alt="Vercel Logo" width={100} height={100} />
        </Flex>
        <Box w={"100%"}>
          <BasicInput placeholder="Digite seu CPF" title="CPF*" />
          <BasicInput placeholder="Digite sua senha" title="Senha*" password />
          <Link href="/forgot-password">
            <Text textAlign={"right"} color={"#000"} fontSize={"14px"} fontWeight={700} mt={"16px"} display={"block"}>
              Esqueci minha senha
            </Text>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};
export default ForgotPassword;
