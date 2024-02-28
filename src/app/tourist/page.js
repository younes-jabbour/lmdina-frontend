'use client';
import React from 'react';
import Hero from '../../components/home/Hero';
import TopEvents from '../../components/home/TopEvents';
import Culture from '../../components/home/Culture';
import NavBar from '../../components/home/Navbar';

export default function CompanyHomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <TopEvents />
      <Culture />
    </>
  );
}
