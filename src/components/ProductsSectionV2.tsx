"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import { map } from "lodash";
import clsx from "clsx";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Decor from "./form/Decor";
interface ProductLine {
  title: string[];
  subtitle: string[];
  highlights: {
    label: string;
    value: string | number;
  }[];
  imgSrc: string;
  imgAlt: string;
  isActive?: boolean; // Dòng sản phẩm nổi bật (vd: ĐANG RA MẮT)
}

const productLines: ProductLine[] = [
  {
    title: ["Căn hộ Beacon", "Căn hộ Blanca"],
    subtitle: ["SẮP RA MẮT", "ĐANG MỞ BÁN"],
    highlights: [
      { label: "Loại hình sản phẩm", value: "Studio, 1PN, 2PN, 2PN góc" },
      { label: "Diện tích", value: "30.6m² - 68.6m²" },
      { label: "Tiêu chuẩn bàn giao", value: "FULL nội thất" },
    ],
    imgSrc: "/product1.jpg", // Bạn thay link ảnh tương ứng
    imgAlt: "Căn hộ Blanca",
    isActive: true,
  },

  {
    title: ["Casa Villa"],
    subtitle: ["ĐANG MỞ BÁN"],
    highlights: [
      { label: "Diện tích", value: "266m² - 319m²" },

      { label: "Chiều cao", value: "3, 4 tầng + 1 tầng hầm" },
      {
        label: "Số lượng sản phẩm",
        value:
          "Villa Song Lập: 153 căn • Villa Đơn Lập: 88 căn • Grand Villa: 64 căn",
      },
      { label: "Pháp lý", value: "50 năm & Sở hữu lâu dài" },

      // { label: "Loại hình sản phẩm", value: "Song Lập, Đơn Lập, Grand Villa" },
      // { label: "Chiều cao", value: "3, 4 tầng + 1 tầng hầm" },
    ],
    imgSrc: "/product2.jpg",
    imgAlt: "Casa Villa",
  },
  {
    title: ["Casa Townhouse"],
    subtitle: ["ĐANG MỞ BÁN"],
    highlights: [
      { label: "Diện tích", value: "131m² - 150m²" },
      { label: "Chiều cao", value: "4 tầng + 1 tầng hầm" },
      { label: "Số lượng sản phẩm", value: "171 căn" },

      { label: "Pháp lý", value: "Sở hữu lâu dài" },
    ],
    imgSrc: "/product3.jpg",
    imgAlt: "Casa Townhouse",
  },
];
const imageSlides = [
  { url: "/product-big-1.jpg" },
  { url: "/product-big-2.jpg" },
  { url: "/product-big-3.jpg" },
  { url: "/product-big-4.jpg" },
  { url: "/product-big-5.jpg" },
  { url: "/product-big-6.jpg" },
];
const ProductsSectionV2 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        position: "relative",
      }}
    >
      <Decor number={2} />

      <Container className="!lg:px-0 relative z-0 flex-col gap-x-7 flex-wrap lg:flex-nowrap items-center">
        <Box className="lg:w-full w-full">
          <h2
            style={{
              fontFamily: "Newsreader",
            }}
            className="xl:text-[48px] text-[44px] mb-5 lg:mt-4 lg:mb-5 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f192b1] bg-clip-text text-transparent"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              Các Dòng Sản Phẩm
            </motion.div>
          </h2>

          {/* List product lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
            {productLines?.map((line, idx) => (
              <div
                key={idx}
                className="mb-8 relative w-full flex flex-col md:flex-row justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-lg">
                    {map(line.title, (title: string, idx: number) => {
                      return (
                        <div
                          key={idx}
                          style={{
                            fontFamily: "Newsreader",
                          }}
                          className={clsx(
                            "!text-[#0565a8] text-[20px]",
                            idx > 0 ? "mt-7" : ""
                          )}
                        >
                          <span key={idx}>
                            <strong className="font-[900]">{title}</strong>
                          </span>
                          <span className="ml-1 font-[500]">
                            ({line.subtitle[idx]})
                          </span>
                        </div>
                      );
                    })}
                  </h3>

                  <ul className="mt-1 list-disc  text-[#333333]">
                    {line.highlights.map((h, i) => (
                      <Box key={i} className="list-style-none">
                        <span className="mr-1 text-secondary  text-[#e16a92]">
                          ⬘
                        </span>
                        <span className="font-semibold">{h.label}:</span>{" "}
                        <span className="font-[400]">{h.value}</span>{" "}
                      </Box>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                {/* <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-[165px] md:h-[165px] lg:w-[105px] lg:h-[105px] xl:w-[150px] xl:h-[150px] rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={line.imgSrc}
                    alt={line.imgAlt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div> */}
              </div>
            ))}
          </div>
        </Box>

        <div
          style={{
            background: "linear-gradient(to bottom, #e88da4, transparent)",
            borderRadius: 16, // ~24px
            padding: "10px",
          }}
          className="!relative !aspect-[1296/648] lg:w-full w-full overflow-hidden"
        >
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            speed={500}
            autoplay={{ delay: 3000 }} // 👉 auto slide sau mỗi 3000ms = 3 giây
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !w-[10px] xl:mx-2 !mx-2  !lg:mx-2 !h-[10px]  rounded-full inline-block transition-all duration-300"></span>`;
              },
            }}
            className="rounded-2xl"
          >
            {imageSlides.map((item, index) => (
              <SwiperSlide className="!h-full" key={index}>
                <img
                  src={item.url}
                  alt={`slide-${index}`}
                  style={{ height: "100%" }}
                  className="!w-full  aspect-[1296/648] lg:aspect-aspect-[1296/648] !h-full !object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
            <div className="absolute bottom-2 left-1/2 w-max mx-auto -translate-x-1/2 z-10">
              <div className="bg-transparent !w-full  custom-swiper-pagination rounded-full px-6 lg:px-3 py-1">
                <div className=" !w-max absolute bottom-2 !left-1/2 -translate-x-1/2  z-10" />
              </div>
            </div>
          </Swiper>

          {/* Dots container */}
          {/* </Box> */}
        </div>
      </Container>
    </Box>
  );
};

export default ProductsSectionV2;
