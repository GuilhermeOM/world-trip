import { Header } from "../components/Header";
import Image from "next/image";
import {
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import banner from "../assets/banner.png";
import mBanner from "../assets/mobile_banner.png";
import europe from "../assets/europe.jpg";
import america from "../assets/america.jpg";
import africa from "../assets/africa.jpg";
import asia from "../assets/asia.jpg";
import oceania from "../assets/oceania.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import home from "../styles/Home.module.css";
import { TripOptions } from "../components/TripOptions";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  }) as boolean;

  return (
    <Box>
      <Header />
      <Box
        maxW="1440px"
        borderRight="1px solid"
        borderLeft="1px solid"
        borderColor="gray.200"
        m="0 auto"
      >
        <Box mt="20">
          <Image
            src={isWideVersion ? banner : mBanner}
            alt="banner"
            className={home.home_trip_banner}
          />

          <TripOptions />

          <Center my="10">
            <Divider w="16" borderColor="black.600" />
          </Center>

          <Center>
            <Stack textAlign="center">
              <Heading fontSize={["20px", "36px"]}>Vamos nessa?</Heading>
              <Heading fontSize={["20px", "36px"]}>Então escolha seu continente</Heading>
            </Stack>
          </Center>

          <Box mt="12" mb="4">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
              <SwiperSlide>
                <Image
                  src={europe}
                  alt="europe"
                  className={home.home_trip_img}
                />
                <Heading
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="whiteAlpha.900"
                  fontSize={["24px", "48px"]}
                >
                  Europa
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
                  O continente mais antigo
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={america}
                  alt="america"
                  className={home.home_trip_img}
                />
                <Heading
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="whiteAlpha.900"
                  fontSize={["24px", "48px"]}
                >
                  América
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
                  O novo mundo
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={africa}
                  alt="africa"
                  className={home.home_trip_img}
                />
                <Heading
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="whiteAlpha.900"
                  fontSize={["24px", "48px"]}
                >
                  Africa
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
                  Maior diversidade cultural
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={asia} alt="asia" className={home.home_trip_img} />
                <Heading
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="whiteAlpha.900"
                  fontSize={["24px", "48px"]}
                >
                  Ásia
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
                  O maior continente
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={oceania}
                  alt="oceania"
                  className={home.home_trip_img}
                />
                <Heading
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="whiteAlpha.900"
                  fontSize={["24px", "48px"]}
                >
                  Oceania
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
                  Maior diversidade de animais
                </Text>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
