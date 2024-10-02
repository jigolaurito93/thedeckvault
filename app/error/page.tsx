"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const params = useParams();
  const { message } = params;
  return <div>{message ? message : "An unknown error occured"}</div>;
};

export default ErrorPage;
