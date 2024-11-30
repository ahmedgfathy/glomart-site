import React from "react";
import Paper from "../../components/paper/page";
import Index from "../../components/banner/page";
import Carousel from "../../components/carousel/Carousel";
import Form from "../../components/form/Form";
import CardCarousel from "../../components/carousel/CardCarousel";
import Logos from "../../components/carousel/logos";
import { properties, resaleUnits } from "./data";
import Offer from "../../components/offer/page";
import { area } from "./data";
import { Grid } from "@mui/material";
export default function Page() {
  let icon_paper_h1 = "What Are You Looking For ?";
  let top_area = "Top Areas";
  let results = 29;

  let icon_paper = [
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/1/medium.webp",
      title: "Developer Units",
      width: 40,
      link: `/home/search?data=${encodeURIComponent(
        JSON.stringify(properties)
      )}`,
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/2/medium.webp",
      title: "Resale Units",
      width: 40,
      link: `/home/search?data=${encodeURIComponent(
        JSON.stringify(resaleUnits)
      )}`,
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/3/medium.webp",
      title: "Sell Your Unit",
      width: 40,
      link: "#",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/4/medium.webp",
      title: "Nawy Now",
      width: 40,
      link: "#",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/5/medium.webp",
      title: "Offers",
      width: 40,
      link: "#",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/6/medium.webp",
      title: "Top Areas",
      width: 40,
      link: "/home/area",
    },
  ];

  let data = [
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
      h1: "salt",
      number: 4,
      text: "Properties",
    },
  ];
  let logos = [
    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1368/high.webp",
    },

    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1368/high.webp",
    },

    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp",
    },
  ];
  return (
    <div className="min-h-screen">
      <Index />
      <Grid container className="justify-center px-5">
        <Grid item xs={12} lg={10}>
          <Paper data={icon_paper} h1={icon_paper_h1} />
          <Offer />
          <Logos data={logos} />
          <Paper data={area} h1={top_area} results={results} />
          <CardCarousel data={properties} h1="Recommended" />
          <Carousel data={data} />
        </Grid>
      </Grid>
    </div>
  );
}
