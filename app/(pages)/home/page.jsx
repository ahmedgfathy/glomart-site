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
export default function Page() {
  let icon_paper_h1 = "What Are You Looking For ?";
  let top_area = "Top Areas";
  let results = 29;

  let icon_paper = [
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/1/medium.webp",
      title: "Primary Units",
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
      title: "Units for Rent",
      width: 40,
      link: "#",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/4/medium.webp",
      title: "Invest",
      width: 40,
      link: "#",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/pathway/image/5/medium.webp",
      title: "Hot offers",
      width: 40,
      link: "#",
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
  ];
  return (
    <div className="min-h-screen">
      <Index />
      <div className="py-20 px-10 lg:px-20 ">
        <Paper data={icon_paper} h1={icon_paper_h1} />
        <Offer />
        <Logos data={logos} />

        <CardCarousel data={properties} h1="Recommended" />
        <Paper data={area} h1={top_area} results={results} />
        <Carousel data={data} />


      </div>
    </div>
  );
}
