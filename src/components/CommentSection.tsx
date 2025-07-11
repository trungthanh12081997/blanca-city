"use client";
import { ConstantConfig } from "@/common/config/constant.config";
import { InputComponent } from "@/components/commons";
import Container from "@/components/container/container";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Box,
  CircularProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import clsx from "clsx";
import { delay, toNumber } from "lodash";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type CommentType = {
  name: string;

  avatar: string;
  phone?: string;
  time: string;
  comment: string;
  title?: string;
  subComment?: CommentType[];
  isSub?: boolean;
  index?: number;
  idCur?: number;
  setindexForm?: (ok: number) => any;
};

const CommentItem = ({
  name,
  phone,
  time,
  avatar,
  comment,
  title,
  subComment = [],
  isSub = false,
  index,
  idCur,
  setindexForm,
}: CommentType) => {
  // console.log("setindexForm", setindexForm);

  return (
    <Box className={clsx("relative", isSub ? "pl-4 lg:pl-6 lg:mt-5" : "")}>
      <Box
        className={clsx(
          !isSub
            ? "left-[23px] lg:max-h-[220px] max-h-[240px]"
            : "left-[50px] lg:max-h-[90px] max-h-[130px]",
          "absolute  h-full w-[2px] bg-[#f7f7f7] z-0"
        )}
      ></Box>
      <Box className="flex">
        <Box
          className={clsx(
            "!w-[50px]  z-1 relative !h-[50px] rounded-full overflow-hidden mr-4 lg:mr-4"
          )}
        >
          <img src={avatar} className="w-full h-full" alt="avatar" />
        </Box>
        <Box className="flex-1">
          <Box className="flex gap-x-2 text-[12.8px]">
            <span className="text-[#155D9C] font-light text-nowrap">
              {name}
              {phone && <span className="font-[500] ml-1">{phone}</span>}
              {title && (
                <span className="text-white bg-[#0B3050] text-[10px] ml-1 px-2 py-[2px]">
                  {title}
                </span>
              )}
            </span>
            <span className="font-light text-[#c0c0c0]">• {time}</span>
          </Box>
          <Box>
            <p className="text-base text-[#000203] mb-5 mt-1">{comment}</p>
            <Box
              onClick={() => {
                if (setindexForm) {
                  setindexForm(index || -111);
                }
              }}
              className="text-[#c0c0c0] text-[12.8px] transition-all cursor-pointer hover:bg-white hover:text-[#155D9C] hover:translate-y-[-2px]"
            >
              TRẢ LỜI
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="pl-6 mt-[16px] lg:mt-[20px] lg:mb-[40px]">
        {index === idCur && (
          <Box className="lg:pl-[32px] pl-[16px]">
            <FormComment
              currentComment={`${name} - ${comment}`}
              isCancelable
              setindexForm={setindexForm}
            />
          </Box>
        )}
      </Box>
      {subComment.length > 0 &&
        subComment.map((sub, idx) => (
          <CommentItem
            key={idx}
            {...sub}
            index={toNumber((index || 0) + 100 + idx)}
            idCur={idCur}
            setindexForm={setindexForm}
            isSub={true}
          />
        ))}
    </Box>
  );
};
const commentSchema = z
  .object({
    name: z.string().min(1, "Vui lòng nhập họ tên"),
    email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
    phone: z
      .string()
      .regex(/^[0-9]{9,15}$/, "Số điện thoại không hợp lệ")
      .optional()
      .or(z.literal("")),
    comment: z.string().optional(),
    rootComment: z.string().optional(),
  })
  .refine((data) => data.phone || data.email, {
    message: "Phải nhập số điện thoại hoặc email",
    path: ["phone"], // gán lỗi cho phone
  });

export type CommentFormType = z.infer<typeof commentSchema>;

export const CommentSection = () => {
  const comment = [
    {
      name: "HÀ CHÂU",
      phone: "[0938***823]",
      comment: "TÔI CẦN MUA CĂN 2PN",
      time: "1 ngày trước",
      avatar: "https://secure.gravatar.com/avatar/?s=50&d=mm&r=g",
      subComment: [
        {
          avatar:
            "https://secure.gravatar.com/avatar/82773059d5c248c27a64a2baba276269?s=50&d=mm&r=g",
          name: "Duy Nguyen",
          time: "1 ngày trước",
          comment:
            "Cảm ơn thông tin của anh chị, chuyên viên tư vấn sẽ kết nối hỗ trợ chi tiết dự án đến anh chị nhé ạ",
          title: "CSKH",
        },
      ],
    },
    {
      name: "Nguyễn Văn Tùng [0983***045]",
      phone: "[0983***045]",
      comment: "giới thiệu dự án",
      time: "1 tuần trước",
      avatar: "https://secure.gravatar.com/avatar/?s=50&d=mm&r=g",
      subComment: [
        {
          avatar:
            "https://secure.gravatar.com/avatar/82773059d5c248c27a64a2baba276269?s=50&d=mm&r=g",
          name: "Duy Nguyen",
          time: "1 tuần trước",
          comment:
            "Cảm ơn thông tin của anh chị, chuyên viên tư vấn sẽ kết nối hỗ trợ chi tiết dự án đến anh chị nhé ạ",
          title: "CSKH",
        },
      ],
    },
    {
      name: "thu hà",
      phone: "[0389***531]",
      comment: "Tư vấn thêm thông tin",
      time: "1 tuần trước",
      avatar: "https://secure.gravatar.com/avatar/?s=50&d=mm&r=g",
      subComment: [
        {
          avatar:
            "https://secure.gravatar.com/avatar/82773059d5c248c27a64a2baba276269?s=50&d=mm&r=g",
          name: "Duy Nguyen",
          time: "1 tuần trước",
          comment:
            "Cảm ơn thông tin của anh chị, chuyên viên tư vấn sẽ kết nối hỗ trợ chi tiết dự án đến anh chị nhé ạ",
          title: "CSKH",
        },
      ],
    },
  ];

  const [indexForm, setIndexForm] = useState(-1);

  return (
    <Box className="bg-white">
      <Container>
        <Box
          style={{
            fontFamily: "Oswald",
          }}
          className="lg:mt-[32px] mb-[32px] lg:mb-[16px]"
        >
          <h3 className="text-[18px] text-center text-[#0B3050] font-[500] px-2  lg:text-2xl">
            Cùng thảo luận bài phân tích dự án
          </h3>
          <p className="text-center text-shadow uppercase text-[#02578a] font-[500] text-[18px] lg:text-2xl">
            BLANCA CITY – Đô thị “Biểu tượng mới” của Sun Group tại Vũng Tàu
          </p>
        </Box>

        <Box className="section-comment lg:mt-[48px]">
          {comment.map((cmt, index: number) => (
            <CommentItem
              key={index + 50}
              {...cmt}
              index={index + 50}
              setindexForm={(index) => setIndexForm(index)}
              idCur={indexForm}
            />
          ))}
        </Box>
        {indexForm == -1 && <FormComment />}
      </Container>
    </Box>
  );
};

const FormComment = ({
  isCancelable = false,
  setindexForm,
  currentComment,
}: {
  isCancelable?: boolean;
  setindexForm?: (number: number) => void;
  currentComment?: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<CommentFormType>({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: CommentFormType) => {
    // console.log("Dữ liệu gửi:", { ...data, rootComment: currentComment });
    try {
      setLoading(true);
      const res = await axios.post(ConstantConfig.BACKEND_URL, {
        ...data,
        sheet_id: "1qKZ02of1fnr4Anc1QNB5fHVoPW_i3ke4q07RkS7j4Eg",
        sheet_name: "Blanca",
        emailRecieved: "greenfire0987@gmail.com",
      });
      setLoading(false);
      reset();
      setSnackbarMessage(
        "Gửi thông tin thành công, chúng tôi sẽ liên hệ trong thời gian sớm nhất!"
      );
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      delay(() => {
        setOpenSnackbar(false);
      }, 3000);
      reset({
        name: "",
        email: "",
        phone: "",
        comment: "",
      });

      // console.log("res", res);
    } catch (error) {
      // console.log("error", error);
      setLoading(false);
      setSnackbarMessage("Gửi thông tin thất bại. Vui lòng thử lại sau.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      delay(() => {
        setOpenSnackbar(false);
      }, 3000);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  // console.log("openSnackbar", openSnackbar, "snackbarMessage", snackbarMessage);

  return (
    <Box className="relative mt-[40px] lg:mt-0">
      {openSnackbar && (
        <Box className="z-[11] relative">
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={openSnackbar}
            autoHideDuration={1000}
            onClose={handleCloseSnackbar}
            key={"center" + "center"}
            style={{
              top: "100px",
            }}
          >
            <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box className="flex border-t border-solid border-[#ddd]">
            <p
              style={{
                fontFamily: "Oswald",
              }}
              className="mr-2 text-[24px] font-[500] uppercase mt-[32px] mb-[16px]"
            >
              bình luận
            </p>
            {isCancelable && (
              <p
                onClick={() => {
                  if (setindexForm) setindexForm(-1);
                }}
                className="text-[#155D9C] hover:text-[#082347] cursor-pointer text-[24px] font-[500] uppercase mt-[32px] mb-[16px]"
              >
                Hủy
              </p>
            )}
          </Box>
          <p className="text-[13px] text-[#155D9C] px-4 lg:px-2">
            Ngoài Họ tên (*), Số điện thoại{" "}
            <span className="text-black">hoặc</span> Email là trường bắt buộc.
            <br />
            BLANCA CITY tuyệt đối tôn trọng quyền riêng tư của khách hàng, chúng
            tôi KHÔNG công khai hoặc sử dụng thông tin liên lạc cho mục đích
            khác.
          </p>
        </Box>

        <Box className="lg:flex lg:mt-4">
          <Box className="w-full my-5 lg:my-0 px-2 lg:w-1/2">
            <TextField
              {...register("comment")}
              multiline
              rows={5}
              placeholder="Nội dung..."
              variant="outlined"
              className="w-full border transition-all font-light text-[14pt] rounded-none font-barlow leading-[1.5] text-[#212529] placeholder-[#383838] bg-white px-3 py-1.5 
                focus:border-[#86b7fe] focus:outline-none focus:ring-2 focus:ring-[#0d6efd40] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)] 
                border-[#082347]"
            />
            <button
              type="submit"
              className={clsx(
                "h-[42px] hidden mt-5 lg:block w-full text-white bg-[#082347] font-semibold py-2 px-4 rounded-sm shadow-md transition-all duration-300 transform hover:bg-[#155D9C] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer"
              )}
            >
              {loading ? (
                <CircularProgress style={{ width: "28px", height: "28px" }} />
              ) : (
                "GỬI ĐI"
              )}
            </button>
          </Box>

          <Box className="flex flex-col gap-4 px-2 lg:w-1/2">
            <InputComponent
              placeholder="Họ tên (*)"
              {...register("name")}
              error={errors.name?.message}
              //   isFocus={false}
              value={watch("name")}
              onChange={(e) => setValue("name", e.target.value)}
              className="placeholder:font-[300] transition-all !border-t-0 focus:outline-none focus:border-b-[#082347] !border-l-0 !border-r-0 border-b-[#ddd] placeholder:text-[#2b2b2b]"
            />
            <InputComponent
              placeholder="Email"
              {...register("email")}
              value={watch("email") as any}
              error={errors.email?.message}
              //   isFocus={false}
              onChange={(e) => setValue("email", e.target.value)}
              className="placeholder:font-[300] transition-all focus:none focus:outline-none focus:border-b-[#082347] !border-t-0 !border-l-0 !border-r-0 border-b-[#ddd] placeholder:text-[#2b2b2b]"
            />
            <InputComponent
              placeholder="Số điện thoại (*)"
              {...register("phone")}
              value={watch("phone") as any}
              error={errors.phone?.message}
              //   isFocus={false}
              onChange={(e) => setValue("phone", e.target.value)}
              className="placeholder:font-[300] transition-all focus:outline-none focus:border-b-[#082347] !border-t-0 !border-l-0 !border-r-0 border-b-[#ddd] placeholder:text-[#2b2b2b]"
            />
            <button
              type="submit"
              disabled={loading}
              className={clsx(
                "h-[42px] lg:hidden w-[140px] text-white bg-[#082347] font-semibold py-2 px-4 rounded-sm shadow-md transition-all duration-300 transform hover:bg-[#155D9C] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer"
              )}
            >
              {loading ? (
                <CircularProgress style={{ width: "28px", height: "28px" }} />
              ) : (
                "GỬI ĐI"
              )}
            </button>
            <p className="text-xs italic text-[#ffffffcc] mt-2 text-center">
              (*) = thông tin bắt buộc
            </p>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
