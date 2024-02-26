import React from "react";
import RootLayout from "@/app/layout";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import TopEvents from "@/components/home/TopEvents";
import Culture from "@/components/home/Culture";
function Index() {
  return (
    <RootLayout>
      <Navbar />
      <Hero />
      <TopEvents />
      <Culture />
    </RootLayout>
  );
}

export default Index;
