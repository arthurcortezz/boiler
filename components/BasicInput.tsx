import { Box, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  title: string;
  password?: boolean;
  placeholder: string;
}

const BasicInput = ({ title, password, placeholder }: Props) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  return (
    <Box py={"20px"}>
      <Text ml={1} fontSize={"16px"} color={"#000"} fontWeight={700}>
        {title}
      </Text>
      <Box pos={"relative"}>
        <Input type={password && visiblePassword ? "password" : "text"} p={"26px"} placeholder={placeholder} style={{ paddingRight: "30px" }} />
        {password && (
          <Image
            alt="eye"
            width={8}
            height={8}
            zIndex={10}
            src="/eye.svg"
            cursor={"pointer"}
            onClick={() => setVisiblePassword(!visiblePassword)}
            style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}
          />
        )}
      </Box>
    </Box>
  );
};
export default BasicInput;
