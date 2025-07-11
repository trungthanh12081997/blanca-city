"use client";

import React from "react";
import { ButtonComponent, InputComponent } from "../../components/commons";
import { Alert, Box, CircularProgress, Grid, Snackbar } from "@mui/material";
import useCommentSubmit from "@/hook/useSubmit";
import clsx from "clsx";
import SuccessOverlay from "./SuccesdOverlay";

interface IFormConsultationProps {
  layout: "vertical" | "grid";
  isInputEmail?: boolean;
  isTextarea?: boolean;
  btnClassName?: string;
  textBtn?: string;
}

export const FormConsultation: React.FC<IFormConsultationProps> = ({
  layout = "grid",
  isInputEmail = true,
  isTextarea = true,
  btnClassName,
  textBtn,
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    product: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    phone: "",
    email: "",
    product: "",
  });

  const [formHasError, setFormHasError] = React.useState(false);
  const [openSucess, setOpenSucess] = React.useState(false);

  const validate = () => {
    let newErrors = { name: "", phone: "", email: "", product: "" };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = "Mục này là bắt buộc.";
      hasError = true;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mục này là bắt buộc.";
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ.";
      hasError = true;
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Địa chỉ e-mail không hợp lệ.";
      hasError = true;
    }

    setErrors(newErrors);
    setFormHasError(hasError);
    return !hasError;
  };
  const {
    loading,
    snackbarMessage,
    snackbarSeverity,
    openSnackbar,
    onSubmit,
    handleCloseSnackbar,
  } = useCommentSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit(formData, "", () =>
        setFormData({
          name: "",
          phone: "",
          email: "",
          product: "",
        })
      ); // Assuming rootComment is not used, pass an empty value
      setOpenSucess(true);
    }
  };

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  // Inline styles tương ứng với các class đã dùng
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    // alignItems: "center"
  };

  const errorBoxStyle: React.CSSProperties = {
    marginTop: "1rem",
    padding: "0.2em 1em",
    border: "2px solid #ffb900",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: "normal",
    color: "#000203",
    fontFamily: "'Krub', sans-serif",
    borderRadius: "0.125rem",
  };

  const italicNoteStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    fontStyle: "italic",
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: "0.5rem",
    textAlign: "center",
  };

  const gridItemStyle: React.CSSProperties = {
    // width: "100%",
  };

  const buttonFlexStyle: React.CSSProperties = {
    flex: 1,
    width: "100%",
  };

  const renderForm = () => {
    if (layout === "grid") {
      return (
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 3 }} style={gridItemStyle}>
            <InputComponent
              placeholder="Họ tên (*)"
              value={formData.name}
              onChange={handleChange("name")}
              error={errors.name}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} style={gridItemStyle}>
            <InputComponent
              placeholder="Số điện thoại (*)"
              value={formData.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} style={gridItemStyle}>
            {isInputEmail ? (
              <InputComponent
                placeholder="Email"
                value={formData.email}
                onChange={handleChange("email")}
                error={errors.email}
              />
            ) : (
              <InputComponent
                placeholder="Quan tâm sản phẩm..."
                value={formData.product}
                onChange={handleChange("product")}
                error={errors.product}
              />
            )}
          </Grid>
          <Box
            className="flex items-center justify-center w-full lg:w-max"
            style={gridItemStyle}
          >
            <ButtonComponent className={clsx(btnClassName, "mx-auto")}>
              {textBtn || "ĐĂNG KÝ TƯ VẤN"}
            </ButtonComponent>
          </Box>
        </Grid>
      );
    }
    return (
      <div style={containerStyle}>
        <InputComponent
          placeholder="Họ tên (*)"
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
        />
        <InputComponent
          placeholder="Số điện thoại (*)"
          value={formData.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />
        {isInputEmail ? (
          <InputComponent
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
            error={errors.email}
          />
        ) : (
          <InputComponent
            placeholder="Quan tâm sản phẩm..."
            value={formData.product}
            onChange={handleChange("product")}
            error={errors.product}
          />
        )}

        {isTextarea ?? <textarea />}
        <ButtonComponent className={btnClassName}>
          {loading ? (
            <CircularProgress style={{ width: "28px", height: "28px" }} />
          ) : (
            textBtn || "GỬI THÔNG TIN"
          )}
        </ButtonComponent>
        {/* <p style={italicNoteStyle}>(*) = thông tin bắt buộc</p> */}
      </div>
    );
  };

  return (
    <>
      <SuccessOverlay open={openSucess} onClose={() => setOpenSucess(false)} />
      <form onSubmit={handleSubmit}>
        {openSnackbar && (
          <Box className="z-[11] w-full relative">
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
        <Grid container>
          <Grid size={{ xs: 12 }}>{renderForm()}</Grid>
          <Grid size={{ xs: 12 }}>
            {formHasError && (
              <div style={errorBoxStyle}>
                Có một hoặc nhiều mục nhập có lỗi. Vui lòng kiểm tra và thử lại.
              </div>
            )}
          </Grid>
        </Grid>
      </form>
    </>
  );
};

// background-image: linear-gradient(30deg, rgba(8, 48, 80, .9), rgba(183, 106, 24, .75));
