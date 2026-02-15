"use client";

import { useState } from "react";
import Banner from "./Banner";
import dataJson from "@/data/data.json";

export default function BannerWrapper() {
  const [bannerData, setBannerData] = useState(dataJson.banner);

  if (!bannerData.showBanner) return null;

  return <Banner bannerData={bannerData} setBannerData={setBannerData} />;
}
