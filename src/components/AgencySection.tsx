import { Box } from "@mui/material";
import Container from "./container/container";
import { SlideInAnimation } from "./commons/Animations";
import Decor from "./form/Decor";

function AgencySection() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        position: "relative",
      }}
    >
   
      <Decor number={2}/>
      <Container className="!lg:px-0 relative z-0 flex gap-x-7 flex-wrap lg:flex-nowrap items-center">
        <Box className="lg:w-1/2 w-full">
          <Box className="mb-7 md:mt-0">
            <SlideInAnimation type="left">
              <span
                style={{
                  fontFamily: "Newsreader",
                }}
                className="lg:leading-auto leading-[1.3] text-[74px] mx-1 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent"
              >
                Đông Tây Land
              </span>
            </SlideInAnimation>
            <p
              style={{
                fontStyle: "italic",
                fontFamily: "Newsreader",
              }}
              className="!lg:text-[32px]  w-full font-[600] text-wrap text-[#0665a8]  !text-[30px] mb-[40px] lg:mb-0 mt-[10px] md:mt-0"
            >
              Đại lý TOP 1 Blanca City by Sun Group
            </p>
          </Box>
          <div className=" text-[#10184C] text-[18.333px] font-[500] rounded-md shadow-sm">
            <p className="mb-4 text-wrap">
              Với vai trò là Đại lý phân phối chiến lược TOP 1 xuất sắc nhất dự
              án Blanca City của Sun Group – Sở hữu giỏ hàng lớn nhất, đa dạng
              nhất, cùng đội ngũ tư vấn chuyên nghiệp, giàu kinh nghiệm, Đông
              Tây Land sẽ giúp Quý khách hàng:
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <span style={{ marginRight: "4px", lineHeight: "1.5" }}>•</span>
                <span>
                  Lựa chọn căn đẹp, vị trí đắc địa, phù hợp nhu cầu và tài
                  chính.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <span style={{ marginRight: "4px", lineHeight: "1.5" }}>•</span>
                <span>
                  Đồng hành, hỗ trợ hoàn thiện thủ tục nhanh chóng, tiết kiệm
                  thời gian.
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <span style={{ marginRight: "4px", lineHeight: "1.5" }}>•</span>
                <span>
                  Tiếp cận chính sách ưu đãi mới nhất, quà tặng & chiết khấu hấp
                  dẫn nhất.
                </span>
              </li>
            </ul>
          </div>
        </Box>

        <div className="bg-[#0565a8] mt-10 lg:mt-0 !relative rounded-tr-[48px] rounded-bl-[48px] rounded-br-[48px] !xl:aspect-[633/428] !lg:aspect-none aspect-[331/220]  p-2 lg:w-1/2 w-full">
          <div className="overflow-hidden !relative rounded-tr-[48px] rounded-bl-[48px] rounded-br-[48px] !xl:aspect-[633/428] !lg:aspect-none aspect-[331/220] h-full w-full">
            <img
              src="/top1.webp"
              alt="top 1 blanca"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default AgencySection;
