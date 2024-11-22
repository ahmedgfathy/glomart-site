"use client";
import React, { useEffect, useState } from "react";
import CardCarousel from "../../../../components/carousel/CardCarousel";
import { properties } from "../../data";
import UnitDetails from "@/app/components/unit-details/UnitDetails";
import UnitSlider from "../../../../components/carousel/UnitsSlider";
import UnitsCarousel from "@/app/components/carousel/UnitsCarousel";
import { getPropertyById } from "@/actions/propertiesAction";
import { use } from "react";

export default function Page({ params }) {
  const { units: unitId } = use(params);

  const [unit, setUnit] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertyById(unitId);
        console.log(data);
        setUnit(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
    console.log(unitId);
  }, [unitId]);

  return (
    <div className="py-10">
      <UnitsCarousel unit={unit} />
      <UnitSlider unit={unit} />
      <UnitDetails unit={unit} />
      <CardCarousel data={properties} h1="Suggested Properties" />
    </div>
  );
}