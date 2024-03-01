import { Button } from "@chakra-ui/react";

interface Props {
  w?: string;
  bg: string;
  title: string;
  color: string;
  borderColor: string;
  onClick?: () => void;
}

const BasicButton = ({ w, title, color, bg, borderColor, onClick }: Props) => (
  <Button color={color} bg={bg} _hover={{ backgroundColor: bg }} border="1px" borderColor={borderColor} onClick={onClick} w={w}>
    {title}
  </Button>
);

export default BasicButton;
