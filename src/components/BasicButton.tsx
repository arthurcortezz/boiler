import { Button } from "@chakra-ui/react";

interface Props {
  w?: string;
  bg: string;
  title: string;
  color: string;
  type?: "button" | "submit" | "reset";
  borderColor: string;
  onClick?: () => void;
}

const BasicButton = ({ w, title, color, bg, type, borderColor, onClick }: Props) => (
  <Button
    w={w}
    bg={bg}
    type={type}
    border="1px"
    color={color}
    onClick={onClick}
    borderColor={borderColor}
    _hover={{ backgroundColor: bg }}>
    {title}
  </Button>
);

export default BasicButton;
