"use client";
import React from "react";
import { area } from "../data";
import Paper from "../../../components/paper/page";
import Form from "../../../components/form/Form";

export default function Page() {
  let top_area = "All Areas";

  return (
    <div className="py-20 px-10 flex flex-col justify-center">

      <Paper data={area} h1={top_area} />
    
    </div>
  );
}
