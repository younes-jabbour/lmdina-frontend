import React from "react";
import heroImg from "../../../public/assets/heroImg.jpg";

function Hero() {
  return (
    <section class="">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-6">
          <h1 className="font-bold text-xl text-blue-600">let's explore Morocco</h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl
            xl:leading-tight">
            Your Moroccan Adventure Awaits. Start Exploring <span className="border-red-500 border-b-4">Today!</span>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iste.
            </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={heroImg.src} alt="mockup"/>
        </div>                
    </div>
</section> 
  );
}

export default Hero;
