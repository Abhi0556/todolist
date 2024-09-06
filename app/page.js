"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Forms/>
    </>
  );
}
