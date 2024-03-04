import { Box, Flex, Image, Input, Link, Text, useBoolean } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import BasicInput from "../../components/BasicInput";

const ForgotPassword = () => {
  return (
    <Layout title="Inicio">
      <Box
        w={"40%"}
        py={"64px"}
        px={"130px"}
        bg={"white"}
        minW={"420px"}
        alignSelf={"center"}
        borderRadius={"16px"}
        justifySelf={"center"}>
        <Flex w={"100%"} justify={"center"} mb={"32px"}>
          <Image src="/logo.svg" alt="Vercel Logo" width={100} height={100} />
        </Flex>
        <Box w={"100%"}>
          <BasicInput placeholder="Digite seu CPF" title="CPF*" />
          <BasicInput placeholder="Digite sua senha" title="Senha*" password />
          <Link href="/forgot-password">
            <Text
              mt={"16px"}
              color={"#000"}
              fontWeight={700}
              fontSize={"14px"}
              display={"block"}
              textAlign={"right"}>
              Esqueci minha senha
            </Text>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};
export default ForgotPassword;
