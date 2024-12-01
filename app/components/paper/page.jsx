"use client";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page({ h1, data, results }) {
  let router = useRouter();

  const [hoveredImage, setHoveredImage] = useState(null);
  return (
    <div>
      <Grid container className="flex gap-10 md:justify-between">
        <Grid item xs={12} lg={10.8}>
          <h1
            className="font-bold lg:text-2xl my-4"
            style={{ color: "rgb(30, 65, 100)" }}
          >
            {h1}
          </h1>
          <p className="text-gray-500 mb-3">
            {results ? `${results}  Results Available` : undefined}{" "}
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        className="flex gap-4 md:gap-10 md:justify-between"
        direction={{ xs: "column", md: "row" }} 
      >
        {data &&
          data?.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={5.5}
                md={3}
                lg={item.round === "full" ? 2.7 : 1.65}
                key={index}
                direction="column"
                className="border cursor-pointer gap-2 p-4  rounded-lg justify-center items-center"
                style={{ borderColor: "#ccc" }}
                onClick={() => {
                  item.link ? router.push(item.link) : undefined;
                }}
              >
                <img
                  src={item.img}
                  alt="..."
                  style={{
                    borderWidth: item.round === "full" ? "10px" : undefined,
                    borderColor: hoveredImage === index ? "#ccc" : "#f2f2f2",
                    width: `${item.width}px`,
                    height: `${item.width}px`,
                    borderRadius: item.round === "full" ? "50%" : `${item.round}px`,
                  }}
                  onMouseOver={() => setHoveredImage(index)}
                  onMouseOut={() => setHoveredImage(null)}
                  className={`m-auto ${item.round === "full" ? "border" : ""} transition duration-400`}
                />
                <p className="text-center font-bold">{item.title}</p>
                {item.number && (
                  <p className="text-center text-gray-500">
                    <span>{item.number}</span> <span>{item.compounds}</span>
                  </p>
                )}
                {item.number2 && (
                  <p className="text-center text-gray-500">
                    <span>{item.number2}</span> <span>{item.text2}</span>
                  </p>
                )}
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
