import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Card() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200, 
    });
  }, []);

  return (
    <div className="container mx-auto w-[1200px] justify-center">
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div><div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
      <div className="flex mt-7 justify-between">
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-right"></div>
        <div className="bg-slate-600 w-48 h-64" data-aos="fade-left"></div>
      </div>
    </div>
  );
}

export default Card;
