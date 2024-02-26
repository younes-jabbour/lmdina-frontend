import React from "react";
import tourist_img from "../../../public/assets/tourist_img.png";
function Culture() {
  return (
    <section className="mt-20 h-60  w-full bg-primary-content">
      <div className="grid grid-cols-12 place-items-center place-content-start mx-auto max-w-screen-xl">
        <img
          src={tourist_img.src}
          className="object-scale-down col-span-6 w-72 h-72 "
          alt="touriste"
        />
        <div className="col-span-6 flex flex-col gap-4">
          <h1 className=" text-3xl font-extrabold leading-tight">
            Enjoy your travel in Moroccan tourist places
          </h1>
          <button className="btn btn-active btn-neutral w-fit">find Place</button>
        </div>
      </div>
    </section>
  );
}

export default Culture;
