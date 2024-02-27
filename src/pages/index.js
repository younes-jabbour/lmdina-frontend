import React from "react";

import useSWR from "swr";
import storage from "../utils/storage";
import checkLogin from "../utils/checkLogin";
import Maybe from "../components/maybe";
import RootLayout from "../app/layout";
import Hero from "../components/home/Hero";
import TopEvents from "../components/home/TopEvents";
import Location from "../components/home/Location";
import Culture from "../components/home/Culture";

function Index() {
  const { data: currentUser, isLoading, isError } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);
  return (
    <>
      <Maybe test={isLoggedIn}>
        <h1>Logged In</h1>
      </Maybe>
      <Maybe test={!isLoggedIn}></Maybe>
      <RootLayout>
        <Hero />
        <TopEvents />
        <Location />
        <Culture />
      </RootLayout>
    </>
  );
}

export default Index;
