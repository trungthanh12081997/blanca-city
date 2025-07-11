"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import Gallery from "./form/Gallery";
import { useState } from "react";
import Decor from "./form/Decor";

const HighlightsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleOpen = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  const list =["/light1.jpg", "/light4.jpg", "/light3.jpg"]
  return (
    <Box
      id="highlights"
      sx={{
        bgcolor: "#ffffff",
        color: "#10184C",
      }}
      className="relative"
    >
      <Gallery
        closeSlider={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
        setCurrentImageIndex={(index: number) => {
          setCurrentImageIndex(index);
        }}
        currentImageIndex={currentImageIndex}
        openSlider={(index: number) => handleOpen(index)}
        images={["/light1.jpg", "/light4.jpg", "/light3.jpg"]}
      />
   
      <Decor number={2}/>

      <Container className="text-[#10184C] font-[500]">
        <Box className="mb-10 md:mt-0">
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
            <span
              style={{
                fontFamily: "Newsreader",
              }}
              className="text-[48px] mx-1 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent"
            >
              Điểm Nhấn Nổi Bật
            </span>
          </motion.div>
          <Typography
            sx={{
              fontStyle: "italic",
              fontFamily: "Newsreader",
              
            }}
            className="!lg:text-[32px] text-[#0665a8] !font-semibold w-max !text-[30px] mb-[40px] lg:mb-0 mt-[-10px] md:mt-0"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
            Tại Blanca City
            </motion.span>
          </Typography>
        </Box>

        <div className="flex flex-col lg:flex-row gap-4 text-[#10184c]">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2
              style={{
                fontFamily: "Newsreader",
                color: "#EF87AC",
              }}
              className="text-xl font-semibold text-[#EF87AC]"
            >
              Sun World
            </h2>
            <Box className="text-gray-700 mt-2">
              <strong className="text-[#0665A8] mr-1">
                Quy mô lớn nhất của Sun Group với 15ha, 21 trò chơi đặc sắc
              </strong>
              tái hiện vẻ đẹp của sông nước miền Tây Nam Bộ:
              <Box className="flex flex-col gap-1 mt-2">
                <p>
                  ⬘ Công viên đầu tiên ở Đông Nam Á có trò chơi tàu lượn siêu
                  tốc phiên bản nước
                </p>
                <span>⬘ Rally Racer 10 lần đầu tiên trên thế giới</span>
                <span>
                  ⬘ Công viên đầu tiên ở Việt Nam có bể tạo sóng đôi cao nhất
                  (1,8m & 2,4m)
                </span>
                <span>
                  ⬘ Bể tạo sóng và tàu lượn nước mini cho trẻ em tại công viên
                  đầu tiên ở Việt Nam
                </span>
                <span>
                  ⬘ Công viên đầu tiên ở Việt Nam có dòng sông thử thác Action
                  River.
                </span>
              </Box>
            </Box>

            <div className="rounded-lg block mt-8 md:hidden overflow-hidden">
              <img src="/light3.jpg" alt="Image 1" className="w-full h-auto" />
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-0 lg:gap-x-2">
              <div>
                <h3
                  style={{
                    fontFamily: "Newsreader",
                    color: "#EF87AC",
                  }}
                  className="text-lg font-semibold "
                >
                  Coastal Hotel
                </h3>
                <Box className=" text-gray-700 mt-2">
                  <strong className="text-[#0665A8]">
                    Thương hiệu khách sạn 5 sao quốc tế
                  </strong>
                  , với sự góp mặt của một trong những đối tác của Sun Group:
                  Hilton, Capella, Marriott, IHG, Accor, IMG…
                </Box>
                <div className="rounded-lg block mt-8 md:hidden overflow-hidden">
                  <img
                    src="/light1.jpg"
                    alt="Image 1"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <h3
                  style={{
                    fontFamily: "Newsreader",
                    color: "#EF87AC",
                  }}
                  className="text-lg font-semibold "
                >
                  Sun Retail
                </h3>
                <Box className=" text-gray-700 mt-2">
                  <strong className="text-[#0665A8]">
                    Trung tâm thương mại mặt biển lớn nhất miền Nam
                  </strong>
                </Box>
                <p className="  mt-2">
                  ⬘ Phố đi bộ thương mại sầm uất, mang lại trải nghiệm khác biệt
                  nhất cho du khách.
                </p>
                <p className="  mt-2">
                  ⬘ Trung tâm hội nghị, thương mại, triển lãm quốc tế.
                </p>
                <div className="rounded-lg block mt-8 md:hidden overflow-hidden">
                  <img
                    src="/light2.jpg"
                    alt="Image 1"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <div className="hidden md:grid grid-cols-3 gap-3 mt-6">
                {list.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleOpen(index);
                    }}
                    className="rounded-sm relative z-1  overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={image}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default HighlightsSection;
