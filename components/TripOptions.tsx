import Image from "next/image";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import building from "../assets/building.svg";
import cocktail from "../assets/cocktail.svg";
import earth from "../assets/earth.svg";
import museum from "../assets/museum.svg";
import surf from "../assets/surf.svg";
import dot from "../assets/dot.svg";

export const TripOptions = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  }) as boolean;

  return (
    <>
      {isWideVersion ? (
        <Flex
          w="100%"
          maxWidth="1080"
          mx="auto"
          p="6"
          align="center"
          justifyContent="space-between"
        >
          <Box textAlign="center">
            <Image src={cocktail} alt="cocktail icon" />
            <Text my="4" fontWeight="bold">
              vida noturna
            </Text>
          </Box>
          <Box textAlign="center">
            <Image src={surf} alt="surf icon" />
            <Text my="4" fontWeight="bold">
              praia
            </Text>
          </Box>
          <Box textAlign="center">
            <Image src={building} alt="building icon" />
            <Text my="4" fontWeight="bold">
              moderno
            </Text>
          </Box>
          <Box textAlign="center">
            <Image src={museum} alt="museum icon" />
            <Text my="4" fontWeight="bold">
              clássico
            </Text>
          </Box>
          <Box textAlign="center">
            <Image src={earth} alt="earth icon" />
            <Text my="4" fontWeight="bold">
              e mais...
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex
          w="100%"
          maxWidth="1080"
          mx="auto"
          p="6"
          align="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Box textAlign="center" display="flex" gap="4">
            <Image src={dot} alt="cocktail icon" />
            <Text my="4" fontWeight="bold">
              vida noturna
            </Text>
          </Box>
          <Box textAlign="center" display="flex" gap="4">
            <Image src={dot} alt="surf icon" />
            <Text my="4" fontWeight="bold">
              praia
            </Text>
          </Box>
          <Box textAlign="center" display="flex" gap="4">
            <Image src={dot} alt="building icon" />
            <Text my="4" fontWeight="bold">
              moderno
            </Text>
          </Box>
          <Box textAlign="center" display="flex" gap="4">
            <Image src={dot} alt="museum icon" />
            <Text my="4" fontWeight="bold">
              clássico
            </Text>
          </Box>
          <Box textAlign="center" display="flex" gap="4">
            <Image src={dot} alt="earth icon" />
            <Text my="4" fontWeight="bold">
              e mais...
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};
