"use client";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import React, { useEffect, useRef, useState } from "react";
import Decor from "./form/Decor";

const LocationSection = () => {
  const [isInView, setIsInView] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  const transportOptions = [
    {
      title: "Đường bộ:",
      image: "/sublocation1.jpg",
      items: [
        {
          time: "90 phút:",
          desc: "Kết nối trung tâm TPHCM & Đông Nam Bộ, qua 2 trục cao tốc Biên Hòa - Vũng Tàu & cao tốc TPHCM - Long Thành",
        },
        {
          time: "90 phút:",
          desc: "Kết nối Tây Nam Bộ, qua 2 trục cao tốc Bến Lức - Long Thành & cao tốc TPHCM - Trung Lương",
        },
      ],
      delay: 0.1,
    },
    {
      title: "Đường hàng không:",
      image: "/sublocation2.jpg",

      items: [
        {
          time: "40 phút:",
          desc: "Sân bay quốc tế Long Thành, đón hàng chục triệu khách quốc tế khi vận hành năm 2026.",
        },
      ],
      delay: 0.2,
    },
    {
      title: "Đường thủy:",
      image: "/sublocation3.jpg",
      items: [
        {
          time: "5 phút:",
          desc: "Cảng Bãi Trước, siêu cảng quốc tế lớn nhất phía Nam - Top 20 thế giới",
        },
        {
          time: "45 phút:",
          desc: "Cảng Cái Mép - Thị Vải, cảng nước sâu lớn nhất Việt Nam",
        },
      ],
      delay: 0.3,
    },
    {
      title: "Đặc biệt",
      image: "/sublocation4.jpg",

      description: [
        `Tọa lạc ngay mặt tiền đường 3/2 - một trong 3  <span style="color: #0665a8; font-weight: bold">"trục xương sống"</span> của Vũng Tàu, kết nối đường Thùy Vân, Bãi Sau và hàng loạt các địa điểm khác của thành phố. Đây cũng là vị trí <span style="color: #0665a8; font-weight: bold">trung tâm mới</span> của Vũng Tàu, TPHCM.`,
        // `Đây cũng là vị trí <span style="color: #0665a8; font-weight: bold">trung tâm mới</span> của Vũng Tàu, TPHCM.`,
      ],
      delay: 0.4,
    },
  ];

  return (
    <Box
      id="location"
      className="bg-gradient-to-b relative text-white from-[#0f184c] to-[#0565a8]"
    >

      <Decor number={1}/>
      <Container>
        <Box className="flex w-full lg:gap-x-[70px] flex-wrap lg:flex-nowrap justify-between mb-3 lg:mb-12 items-end">
          <Box className="mb-10 md:mb-0">
            <motion.div
              ref={boxRef}
              initial={{ x: -100 }}
              animate={{ x: isInView ? 0 : -100 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }} 
            >
              <span
                style={{
                  fontFamily: "Newsreader",
                }}
                className="text-[48px] mx-1 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent"
              >
                Vị Trí
              </span>
            </motion.div>
            <Typography
              sx={{
                fontStyle: "italic",
                fontFamily: "Newsreader",
              }}
              className="!lg:text-[32px] font-semibold w-max !text-[30px] mb-[40px] lg:mb-0 mt-[-10px] md:mt-0"
            >
              "Trung tâm của Trung tâm"
            </Typography>
          </Box>

          <p className="max-w-[633px] lg:w-1/2 !lg:max-w-[433px]">
            {/* <p className="!w-full"> */}
            Từ năm 2026, mọi trục động lực hạ tầng huyết mạch của miền Nam sẽ
            rút ngắn khoảng cách và thời gian đến Blanca City Vũng Tàu:
            {/* </p> */}
          </p>
        </Box>
        <Box className="md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex-wrap xl:flex-nowrap md:gap-x-[30px] lg:gap-y-3 ">
          {transportOptions.map((option, idx) => (
            <Box
              style={{
                backgroundImage: `url(${option.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className=" !lg:w-1/2 mt-4 md:min-h-[308px] min-h-[300px] border border-solid border-[#f08daf] lg:mt-0 !xl:w-1/4 w-full rounded-xl overflow-hidden duration-500 hover:translate-y-[-10px]"
              key={idx}
            >
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: option.delay }}
                viewport={{ once: true }}
                sx={{
                  bgcolor: "rgba(255,255,255,0.8)",
                  // height: "100%",
                }}
                className="rgba(255,255,255,0.1) md:min-h-[308px] min-h-[300px] lg:p-[24px] lg:pb-[60px] p-[20px] pb-[60px]"
              >
                <Typography
                  className="!mb-2 !font-semibold"
                  variant="h5"
                  sx={{
                    color: "#ef87ac",

                    fontFamily: "Newsreader",
                  }}
                >
                  {option.title}
                </Typography>

                {/* Nếu có item dạng danh sách */}
                {option.items?.map((item, i) => (
                  <Box key={i}>
                    <p className=" font-[500] w-full mb-1 items-center leading-6">
                      <span className=" text-secondary  text-[#0665a8]">⬘</span>
                      <span className="mx-1 font-semibold bg-gradient-to-r text-[#0665a8] ">
                        {item.time}
                      </span>
                      {item.desc}
                    </p>
                  </Box>
                ))}

                {/* Nếu có description dạng paragraph */}
                {option.description?.map((desc, i) => (
                  <Box key={i}>
                    <Box
                      dangerouslySetInnerHTML={{ __html: desc }}
                      className="mt-2 font-[500] items-center leading-6"
                    ></Box>
                  </Box>
                ))}
              </Paper>
            </Box>
          ))}
        </Box>

        {/* <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          sx={{
            mt: 6,
            width: "100%",
            height: { xs: "300px", md: "500px" },
            bgcolor: "red", // Placeholder for map image
            borderRadius: 2,
            overflow: "hidden",
          }}
        /> */}
      </Container>
    </Box>
  );
};

export default LocationSection;
