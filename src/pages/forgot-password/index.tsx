import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import BasicInput from "../../components/BasicInput";
import { useState } from "react";
import BasicButton from "../../components/BasicButton";

const ForgotPassword = () => {
  const [mail, setMail] = useState(null);
  const handleSendRecoverMail = () => {
    // console.log("🚀 ~ ForgotPassword ~ mail:", mail);
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
          <BasicInput placeholder="Digite seu e-mail" title="E-mail *" setValue={setMail} />
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
          <BasicButton
            type={"submit"}
            bg={"blue.200"}
            color={"white"}
            title={"Enviar"}
            borderColor={"blue.200"}
            onClick={handleSendRecoverMail}
          />
        </Box>
      </Box>
    </Layout>
  );
};
export default ForgotPassword;
