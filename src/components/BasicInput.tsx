import { Box, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  title: string;
  password?: boolean;
  placeholder: string;
  setValue: (value: string) => void;
}

const BasicInput = ({ title, password, placeholder, setValue }: Props) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  return (
    <Box py={"8px"}>
      <Text ml={1} fontSize={"16px"} color={"#000"} fontWeight={700}>
        {title}
      </Text>
      <Box pos={"relative"}>
        <Input
          p={"26px"}
          placeholder={placeholder}
          style={{ paddingRight: "30px" }}
          onChange={e => setValue(e.target.value)}
          type={password && visiblePassword ? "password" : "text"}
        />
        {password && (
          <Image
            alt="eye"
            width={5}
            height={5}
            zIndex={10}
            src="/eye.svg"
            cursor={"pointer"}
            onClick={() => setVisiblePassword(!visiblePassword)}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </Box>
    </Box>
  );
};
export default BasicInput;
