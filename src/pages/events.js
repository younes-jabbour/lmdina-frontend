"use client";
import RootLayout from "../app/layout";
import React from "react";
import EventsCard from "../components/events/eventsCard";

function events() {
  return (
    <RootLayout>
      <div>events</div>
      <EventsCard />
    </RootLayout>
  );
}

export default events;
