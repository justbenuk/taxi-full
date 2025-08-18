"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";
export default function CustomToastContainer() {
  const { theme } = useTheme();
  return <ToastContainer position="top-right" autoClose={3000} newestOnTop={true} pauseOnHover theme={theme} />;
}
