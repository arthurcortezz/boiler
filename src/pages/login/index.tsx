import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import { GlobalContext } from "../../context";
import MessageToast from "../../components/Toast";
import BasicInput from "../../components/BasicInput";
import BasicButton from "../../components/BasicButton";
import { AuthenticationController } from "../../controllers";

const Login = () => {
  const global = useContext(GlobalContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const result = await AuthenticationController.login(email, password);
      global.setUser(result.user);
      global.setToken(result.token);
      router.push("/dashboard");
    } catch (error) {
      MessageToast.error(error.message);
    }
  };

  const handleRedirect = (route: string) => {
    router.push(route);
  };
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
          <BasicInput placeholder="Digite seu e-mail" title="E-mail *" setValue={setEmail} />
          <BasicInput
            placeholder="Digite sua senha"
            title="Senha *"
            password
            setValue={setPassword}
          />
          <Link onClick={() => handleRedirect("/forgot-password")}>
            <Text
              color={"#000"}
              fontWeight={700}
              display={"block"}
              fontSize={"14px"}
              textAlign={"left"}>
              Esqueci minha senha
            </Text>
          </Link>
          <Box display={"flex"} flexDir={"column"} gap={4} py={4}>
            <BasicButton
              w={"100%"}
              title="Entrar"
              color={"white"}
              bg={"blue.200"}
              borderColor={"blue.200"}
              onClick={() => handleSignUp()}></BasicButton>
            <BasicButton
              w={"100%"}
              bg={"white"}
              color={"blue.200"}
              title="Criar nova conta"
              borderColor={"blue.200"}
              onClick={() => handleRedirect("register")}></BasicButton>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default Login;
