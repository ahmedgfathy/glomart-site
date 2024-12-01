"use client"
import { Button } from "@/components/ui/button";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter()
  const data = [
    {
      backgroundImage:
        "https://media.istockphoto.com/id/1371256107/photo/the-turquoise-wave-water-background-of-summer-beach-at-the-seashore-and-beach-summer-pattern.jpg?b=1&s=612x612&w=0&k=20&c=7AcZHMg5B0bnLeK3RQ_zfjcra3WinNHZKZ03INzcNsw=",
    },
    {
      backgroundImage:
        "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
    },
    {
      backgroundImage:
        "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
    },
    {
      backgroundImage:
        "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
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
            className="h-[200px] w-full relative rounded-lg overflow-hidden group"
            sx={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-4 transition-opacity">
              <Button
                onClick={() => router.push('/rent')}
              >
                Rent
              </Button>
              <Button
                onClick={() => router.push('/sell')}
              >
                Sell
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
