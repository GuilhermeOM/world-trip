import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      px="6"
      borderBottom="1px solid"
      borderColor="gray.200"
      align="center"
      position="absolute"
      bottom="100%"
    >
      <Image src={logo} alt="logo" style={{ margin: "0 auto" }} />
    </Flex>
  );
};
