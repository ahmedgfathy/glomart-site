import { Grid } from "@mui/material";
import React from "react";

export default function Page() {
  const data = [
    {
      backgroundImage:
        "https://media.istockphoto.com/id/1371256107/photo/the-turquoise-wave-water-background-of-summer-beach-at-the-seashore-and-beach-summer-pattern.jpg?b=1&s=612x612&w=0&k=20&c=7AcZHMg5B0bnLeK3RQ_zfjcra3WinNHZKZ03INzcNsw=",
    },
    {
      backgroundImage:
        "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
      image:
        "https://www.nawy.com/_next/static/media/sahel-banner-text.2c92e060.svg",
    },
    {
      backgroundImage:
        "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
      image:
        "https://www.nawy.com/_next/static/media/sahel-banner-text.2c92e060.svg",
    },
    {
      backgroundImage:
        "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
      image:
        "https://www.nawy.com/_next/static/media/sahel-banner-text.2c92e060.svg",
    },
  ];

  return (
    <div>
      <Grid container className="flex justify-between mt-6 mb-6 gap-5">
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            md={5.8}
            lg={2.8}
            key={index}
            className="h-[200px] w-full relative rounded-lg"
            sx={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {item.image && (
              <img
                src={item.image}
                alt="..."
                className="absolute w-full left-[20px]  top-1/2 -translate-y-1/2"
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
