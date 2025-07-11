"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BannerComponent from "./commons/HeroBannerComponent";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BannerComponent
        // img="/components/hero/hero.jpg"
        // imgTablet="/components/hero/hero.jpg"
        // imgMb="/components/hero/hero-mb.jpg"
        img="/hero8.png"
        imgTablet="/hero8.png"
        imgMb="/hero8-mb.png"
      />
      {/* <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            textAlign: "center",
            color: "white",
            zIndex: 2,
            position: "relative",
          }}
        >
          {/* <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              fontWeight: "bold",
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Blanca City
          </Typography>
          <Typography
            variant="h3"
            component={motion.h3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            sx={{
              mb: 4,
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Đô thị "Biểu tượng mới" của Sun Group tại TP Vũng Tàu
          </Typography> */}
      {/* </Box>
      </Container> */}
    </Box>
  );
};

export default HeroSection;
