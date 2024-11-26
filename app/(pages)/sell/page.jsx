"use client";
import React, { useState, useEffect } from "react";
import RentAndSellCard from "@/app/components/rent-and-sell-card/RentAndSellCard";
import { getAllProperties } from "@/actions/propertiesAction"
import { Grid } from "@mui/material";


export default function Sell() {
  let h1 = "sell";
  const [units, setUnits] = useState([])
  const fetchData = async () => {
    const { properties, totalProperties } = await getAllProperties();
    setUnits(properties)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container m-auto  py-10  px-3 flex justify-center w-full ">
      <Grid container className="flex justify-center gap-5 w-full">
        {
          units.map((property, index) => (
            <Grid item xs={12} sm={5.8} md={3.9} lg={3.4} key={index}>
              <RentAndSellCard property={property}  h1={h1} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
