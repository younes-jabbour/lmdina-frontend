'use client';

import useSWR from "swr";
import storage from "../utils/storage";
import Navbar from '../components/navbar';
import CompanyHomePage from '../app/company/page';
import checkLogin from '../utils/checkLogin';
import Maybe from '../components/maybe';
import React from 'react';

export default function Home() {
  const {data: currentUser, isLoading, isError} = useSWR("user", storage);

  const isLoggedIn = checkLogin(currentUser);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Maybe test={isLoggedIn}>
          <h1>Logged In</h1>
        </Maybe>
        <Maybe test={!isLoggedIn}>
          <CompanyHomePage />
        </Maybe>
      </div>
    </div>
  );
}
