"use client";

import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ImageComponent } from "./commons/ImageComponent";
import Container from "./container/container";
import { SlideInAnimation } from "./commons/Animations";

const SunGroupSection = () => {
  return (
    <Box
      id="sungroup"
      sx={{
        // bgcolor: "#0e3b7c",
        color: "white",
      }}
      className="bg-gradient-to-b text-white to-[#12194f] from-[#0764a6]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SlideInAnimation type="left">
            <Stack
              sx={{
                // background: "linear-gradient(90deg, #df658e 0, #f293b3)",
                // WebkitBackgroundClip: "text",
                // color: "transparent",
                fontSize: "48px",
                fontWeight: 600,
                fontFamily: "Newsreader",
              }}
              className="lg:w-full w-full text-center"
            >
              <span className="text-[#e7779c]">Những "Biểu Tượng"</span>
              <span className="text-[#f292b3]">Du Lịch & Đô Thị Sun Group</span>
            </Stack>
          </SlideInAnimation>
          <SlideInAnimation type="bottom" >
            <Typography
              sx={{
                marginBottom: "70px",
                fontStyle: "italic",
                fontSize: "32px",
                fontWeight: 600,
                fontFamily: "Newsreader",
              }}
              className="mx-auto text-center"
            >
              Đã triển khai
            </Typography>
          </SlideInAnimation>
        </motion.div>
        <Box className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-2">
          {[
            "/SunGroup/sungroup01.webp",
            "/SunGroup/sungroup03.webp",
            "/SunGroup/sungroup02.webp",
            "/SunGroup/sungroup05.webp",
            "/SunGroup/sungroup04.webp",
          ].map((imgSrc, index) => (
            <Box sx={{ borderRadius: "10px", overflow: "hidden" }} key={index}>
              <ImageComponent img={imgSrc} />
            </Box>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          // marginTop: "-120px",
          marginBottom: "-40px",
        }}
        className="lg:mt-[-140px] md:mt-[-120px] mt-[-40px]"
      >
        <SlideInAnimation type="bottom">
          <ImageComponent img={"/SunGroup/sungroup.png"} />
        </SlideInAnimation>
      </Box>
    </Box>
  );
};

export default SunGroupSection;
