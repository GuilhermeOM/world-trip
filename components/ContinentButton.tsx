import Image, { StaticImageData } from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";
import home from "../styles/Home.module.css";

interface SliderProps {
  image: StaticImageData;
  alt: string;
  heading: string;
  text: string;
}

export const ContinentButton = ({ image, alt, heading, text }: SliderProps) => {
  return (
    <Box>
      <Image src={image} alt={alt} className={home.home_trip_img} />
      <Heading
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="whiteAlpha.900"
        fontSize={["24px", "48px"]}
      >
        {heading}
      </Heading>
      <Text
        position="absolute"
        top={["40%", "50%"]}
        left="50%"
        transform="translate(-50%, -50%)"
        color="whiteAlpha.900"
        fontSize={["14px", "24px"]}
        fontWeight="bold"
        textAlign="center"
        mt="16"
      >
        {text}
      </Text>
    </Box>
  );
};
