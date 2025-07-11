"use client";

import { Box, Typography, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { isEmpty } from "lodash";

export const InfoItem = ({
  label,
  value = "",
  className = "",
  isStar = true,
}: {
  label: string | React.ReactElement;
  value?: string | React.ReactElement;
  className: string;
  isStar?: boolean;
}) => (
  <>
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <Typography
        sx={{ fontSize: "17px", padding: "10px 0", fontWeight: 500 }}
        className={clsx(
          className,
          " w-full gap-x-1 border-solid border-white ",

          isStar ? "border-b border-solid border-white pb-4" : ""
        )}
      >
        <p>
          {isStar && (
            <span className="mr-1 text-secondary text-[#e16a92]">⬘</span>
          )}
          {!isEmpty(label) && (
            <strong className="text-white mr-1">{label}</strong>
          )}
          {value}
        </p>
      </Typography>
    </Box>
    {/* <Divider
      sx={{ marginTop: "5px", marginBottom: "10px", backgroundColor: "white" }}
    /> */}
  </>
);
const projectInfo = [
  {
    label: "Tên dự án:",
    value: (
      <>
        Khu đô thị <strong> Blanca City </strong>{" "}
      </>
    ),
  },
  {
    label: "Bàn giao:",
    value: (
      <span>
        Dự kiến quý
        <span
          style={{ fontFamily: "Newsreader", lineHeight: 1 }}
          className="mr-1 !leading-none ml-1 text-[24px] font-semibold bg-gradient-to-r from-[#cd1854] to-[#f08eaf] bg-clip-text text-transparent"
        >
          IV/2027
        </span>
      </span>
    ),
  },
  {
    label: "Chủ đầu tư:",
    value: (
      <>
        Tập đoàn <strong> Sun Group </strong>{" "}
      </>
    ),
  },
  {
    label: "Pháp lý:",
    value: (
      <>
        <span
          style={{ fontFamily: "Newsreader", lineHeight: 1 }}
          className="mr-1 !leading-none ml-1 text-[24px] font-semibold bg-gradient-to-r from-[#cd1854] to-[#f08eaf] bg-clip-text text-transparent"
        >
          50
        </span>
        năm &
        <span
          style={{ fontFamily: "Newsreader", lineHeight: 1 }}
          className="mr-1 !leading-none ml-1 text-[24px] font-semibold bg-gradient-to-r from-[#cd1854] to-[#f08eaf] bg-clip-text text-transparent"
        >
          Sở hữu lâu dài
        </span>
      </>
    ),
  },
  {
    label: "Vị trí:",
    value: "Mặt tiền đường 3/2, Vũng Tàu, TP HCM",
  },
  {
    label: "Tiện ích:",
    value:
      "Công viên nước Sun World, Trung tâm thương mại Sun Retail, Khách sạn 5 sao, Trung tâm văn hóa - thể thao, Trường học liên cấp, Y tế...",
  },
  {
    label: "",
    isStar: false,
    value: (
      <div className="w-full flex flex-col mt-[-12px] lg:flex-row gap-y-3  justify-between">
        <div className="flex w-1/2 items-end ">
          <p className="mr-1 text-secondary w-max text-[#e16a92]">⬘</p>{" "}
          <span>
            <strong className="w-max flex">Quy mô:</strong>
          </span>
          <Typography
            component="span"
            sx={{
              color: "secondary.main",
              fontSize: "27px",
              fontWeight: "bold",
              ml: 1,
            }}
            className="w-full flex items-end"
          >
            <p
              style={{ fontFamily: "Newsreader", lineHeight: 1 }}
              className="mr-1 !leading-none font-semibold bg-gradient-to-r from-[#ce255e] to-[#f08eaf] bg-clip-text text-transparent"
            >
              96 ha
            </p>
          </Typography>
        </div>
        <div className="flex w-1/2">
          <p className="mr-1 text-secondary w-max text-[#e16a92]">⬘</p>{" "}
          <span>
            <strong className="w-max flex">Mật độ xây dựng:</strong>
          </span>
          <Typography
            component="span"
            sx={{
              color: "secondary.main",
              fontSize: "27px",
              fontWeight: "bold",
              ml: 1,
            }}
            className="w-full flex items-start"
          >
            <p
              style={{ fontFamily: "Newsreader", lineHeight: 1 }}
              className="mr-1 !leading-none font-semibold bg-gradient-to-r from-[#ce255e] to-[#f08eaf] bg-clip-text text-transparent"
            >
              27,9%
            </p>
          </Typography>
        </div>
      </div>
    ),
  },
  // {
  //   label: "Mật độ xây dựng:",
  //   value: (
  //     <Typography
  //       component="span"
  //       sx={{
  //         color: "secondary.main",
  //         fontSize: "27px",
  //         fontWeight: "bold",
  //         mx: 1,
  //       }}
  //     >
  //       <span
  //         style={{ fontFamily: "Newsreader" }}
  //         className=" xl:mb-5 font-semibold bg-gradient-to-r from-[#ca4874] to-[#f08eaf] bg-clip-text text-transparent"
  //       >
  //         27,6
  //       </span>
  //       %
  //     </Typography>
  //   ),
  // },
];

const OverviewSectionV2 = () => {
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

  return (
    <Box
      sx={{
        py: 4,
        paddingTop: { xs: 0, md: "130px" },
        paddingBottom: 0,
        // bgcolor: "#0e3b7c",
        color: "#E3E3E3",
        overflow: "hidden",
      }}
      className="bg-gradient-to-b text-white from-[#12194f] to-[#0764a6]"
    >
      <Box
        id="overview"
        className="h-auto"
        sx={{ position: "relative", height: "100%" }}
      >
        {/* Background image with animation */}

        {/* Content */}
        {/* <Container sx={{ position: "relative", margin: 0,  zIndex: 1 }}> */}
        <Container  className="relative">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-full lg:top-[64px]  w-full "
          >
            <h2
              style={{
                fontFamily: "Newsreader",
              }}
              className="xl:text-[48px] text-[44px] mb-5 lg:mb-5 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f192b1] bg-clip-text text-transparent"
            >
              Tổng Quan Dự Án
            </h2>
          </motion.div>

          <Box className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:top-[64px] lg:absolute w-full mt-[20px]">
            {/* <div className="grid \grid-cols-1 md:grid-cols-2 gap-4 bg-[#0D1E5E] text-white p-4 rounded-lg"> */}
            {projectInfo.map((item, index) => (
              <InfoItem
                isStar={item.isStar}
                key={index}
                label={item.label}
                value={item.value}
                className={""}
              />
            ))}
            {/* </div> */}
          </Box>
        </Container>

        {/* </Grid> */}

        {/* </Container> */}
        <Box
          className="lg:mt-47 md:mt-[-60px] mt-[-60px]"
          sx={{
            // position: "absolute",
            top: { xs: "unset", md: 0 },
            bottom: { xs: 0, md: "unset" },
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <img
              src="/overview1.png"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "bottom center",
              }}
              className="lg:flex hidden"
            />
            <img
              src="/overview1-mb.png"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "bottom center",
              }}
              className="flex lg:hidden"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewSectionV2;
