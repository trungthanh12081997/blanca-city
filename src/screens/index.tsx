import { ContactWidget } from "@/components/ContactWidget";
import DesignSection from "@/components/DesignSectionV2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import { IFrameMap } from "@/components/IFrameMap";
import IntroSection from "@/components/IntroSection";
import LocationSection from "@/components/LocationSection";
import OverviewSection from "@/components/OverviewSection";
import ProductsSectionV2 from "@/components/ProductsSectionV2";
import SunGroupSection from "@/components/SunGroupSection";
import { Box, Grid } from "@mui/material";
import React from "react";
import { ReceiveInformationSection } from "./ReceiveInformationSection";
import { TotalAreaSection } from "./TotalAreaSection";
import { MapAddressSection } from "./MapAddressSection";
import BannerComponent from "@/components/commons/HeroBannerComponent";
import { CommentSection } from "@/components/CommentSection";
import VideoSlider from "@/components/VideoSlider";
import HeaderForm from "@/components/HeaderForm";
import Link from "next/link";
import SellSection from "@/components/SellSection";
import SuccessOverlay from "@/components/form/SuccesdOverlay";
import OverviewSectionV2 from "@/components/OverviewSectionV2";
import AutoPlayYoutube from "@/components/Video";
// import AgencySection from "@/components/AgencySection";

export const MainPage: React.FC = () => {
  return (
    <Box className="relative">
      {/* <Box> */}
      {/* <canvas width="1100" height="500" className="BlackholeCta_canvas-starfield__ArD7F"></canvas> */}

      <Box id="#hero" className="max-w-[1920px] relative mx-auto w-full">
        <Box className="w-full relative">
          <Box className="absolute w-full top-4 left-[50%] translate-x-[-50%] z-10">
            {/* <HeaderForm /> */}
          </Box>
          <BannerComponent
            // img="/hero1.jpg"
            // imgTablet="/hero1-tablet.jpg"
            // imgMb="/hero1-mb.webp"
            img="/hero7.jpg"
            imgTablet="/hero7.jpg"
            imgMb="/hero7.jpg"
          />
          <Link
            href="#intro"
            className=" absolute hidden md:flex left-[50%] translate-x-[-50%] bottom-[30px] z-10 cursor-pointer mx-auto w-full flex-col  justify-center items-center"
          >
            <span className="border-t-2 animationInOut1 border-r-2 mt-[-4px] border-gray-300 rotate-135 transform w-7 h-7 inline-block"></span>
            <span className="border-t-2 animationInOut2 border-r-2 mt-[-4px] border-gray-300 rotate-135 transform w-7 h-7 inline-block"></span>
            <span className="border-t-2 animationInOut3 border-r-2 mt-[-4px] border-gray-300 rotate-135 transform w-7 h-7 inline-block"></span>
          </Link>
        </Box>
      </Box>
      <Header />

      <Grid size={{ xs: 12 }}>
        <Box>
          <HeroSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }} id="intro">
        <Box
          className="
          mt-[0px] md:mt-[0px] lg:mt-[-20px] !xl:mt-[-200px] relative z-[2]"
        >
          <IntroSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <LocationSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong, sai vị trí, chưa review */}
        <MapAddressSection />
      </Grid>

      {/* <Grid size={{ xs: 12 }}>
        <VideoSlider
          videos={[
            {
              title: "Ocean Waves",
              description:
                "Blanca City - 'Cực Phẩm' đáp ứng đúng nhu cầu mà các nhà đầu tư đang tìm kiếm đầu năm 2025.",
              src: "https://www.youtube.com/embed/VFkb7z127x0?si=BluHcSgR8J2HokbG",
              thumbnail: "/video1.jpg",
            },
          ]}
        />
      </Grid> */}
      {/* <Grid size={{ xs: 12 }}>
        {" "}
        <ReceiveInformationSection
          isLogo={false}
          text={"Tư vấn tiềm năng đô thị biển Blanca City by Sun Group."}
        />
      </Grid> */}
      <Grid size={{ xs: 12 }}>
        <Box>
          <OverviewSectionV2 />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <HighlightsSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <BannerComponent
          // img="/hero-release.jpg"
          // imgTablet="/hero-release.jpg"
          // imgMb="/hero-release.jpg"
          img="/casa.png"
          imgTablet="/casa.png"
          imgMb="/casa.png"
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ReceiveInformationSection
          isLogo={false}
          text={
            <div
              style={{ fontFamily: "Newsreader", fontWeight: 800 }}
              className="flex !font-[800] text-[24px] text-whote flex-col gap-y-1"
            >
              <p className="!font-[700] uppercase">
                THAM QUAN SA BÀN BLANCA CITY
              </p>

              <p className="!font-[700]">
                *Quý Anh/Chị điền thông tin bên dưới để chuyên viên hỗ trợ đặt
                lịch & tư vấn chi tiết sản phẩm nhé!
              </p>
            </div>
          }
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        <TotalAreaSection />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box id="products" className="xl:pt-[60px] xl:pb-[120px] bg-white">
          <ProductsSectionV2 />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <BannerComponent
          img="/hero-map.jpg"
          imgTablet="/hero-map.jpg"
          imgMb="/hero-map.jpg"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Box className="xl:pt-[60px] xl:pb-[120px] bg-white">
          <DesignSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box id="sell" className="xl:pt-[60px] xl:pb-[60px] bg-gradient-to-b  from-[#12194f] to-[#0764a6]">
          <SellSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <SunGroupSection />
        </Box>
      </Grid>
      {/* <Grid size={{ xs: 12 }}>
        <Box>
          <AgencySection />
        </Box>
      </Grid> */}
      <Grid size={{ xs: 12 }}>
        <Box className="mt-10">
          <AutoPlayYoutube />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <CommentSection />
      </Grid>
      {/* <Grid size={{ xs: 12 }}>
       
        <Box>
          <IFrameMap />
        </Box>
      </Grid> */}
      <Grid size={{ xs: 12 }}>
        <ReceiveInformationSection
          text={
            <div
              style={{ fontFamily: "Newsreader" }}
              className="flex !font-bold  text-whote flex-col gap-y-1"
            >
              <p className="!font-[700] mb-4">
                <strong>
                  Quý khách đừng ngần ngại liên hệ để nhận tư vấn chi tiết nhất
                  về dự án Blanca City by Sun Group
                </strong>
              </p>

              <p className="!font-[700] italic">
                Cam kết thông tin uy tín nhất từ Đại lý TOP 1 của Chủ đầu tư!
              </p>
            </div>
          }
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ContactWidget />
        <Footer />
      </Grid>
    </Box>
  );
};
