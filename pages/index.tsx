import { Header } from "../components/Header";
import Image from "next/image";
import {
  Box,
  Center,
  Divider,
  Heading,
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
import { ContinentButton } from "../components/ContinentButton";

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
              <Heading fontSize={["20px", "36px"]}>
                Então escolha seu continente
              </Heading>
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
                <ContinentButton
                  image={europe}
                  alt="Cidade europeia"
                  heading="Europa"
                  text="O Continente mais antigo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContinentButton
                  image={america}
                  alt="Cidade Americana"
                  heading="América"
                  text="O novo mundo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContinentButton
                  image={africa}
                  alt="Cidade Africana"
                  heading="Africa"
                  text="Maior diversidade cultural"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContinentButton
                  image={asia}
                  alt="Cidade Asiática"
                  heading="Ásia"
                  text="O maior continente"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContinentButton
                  image={oceania}
                  alt="Cidade da Oceania"
                  heading="Oceania"
                  text="Maior diversidade de animais"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
