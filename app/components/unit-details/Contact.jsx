import React from "react";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function contact({ unit }) {
  return (
    <div
      className="flex items-center  gap-5 flex-wrap sticky top-0 py-3  "
      style={{ backgroundColor: "white" }}
    >
      <img
        className="w-[100px] h-[100px] rounded-full border"
        style={{ borderWidth: "15px", borderColor: "#f2f2f2" }}
        src="https://prod-images.cooingestate.com/processed/developer/logo_image/16/high.webp"
        alt="..."
      />
      <div className="flex-1">
        <p>
          <span
            className="font-bold text-2xl my-4"
            style={{ color: "rgb(30, 65, 100)" }}
          >
            {unit.name}
          </span>{" "}
          <span
            className="px-4 py-1 rounded-lg"
            style={{ backgroundColor: "#f2f2f2" }}
          >
            Property
          </span>
        </p>
        <p>Cleo , New Cairo, Egypt</p>
        <p className="text-sm mt-3">Price</p>
        <div className="flex items-center  flex-wrap">
          <p className="flex-1 font-bold text-2xl ">
            {unit.totalPrice?.toLocaleString()} {unit.currency}
          </p>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${unit?.tel}`}
              className="flex items-center  gap-2 justify-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duration-200"
            >
              <MdCall className="text-xl" /> <span>Call US</span>
            </a>
            <button className="flex items-center gap-2 justify-center px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md shadow-md transition duration-200">
              <FaWhatsapp className="text-xl" />
              <span>Whatsapp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
