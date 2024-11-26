"use client"
import { useEffect, useState } from "react"
import { Heart, Home, Share2, Phone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllProperties } from "@/actions/propertiesAction"
import { FaWhatsapp } from "react-icons/fa6"
import { MdOutlineBedroomChild } from "react-icons/md"
import { CiLocationOn } from "react-icons/ci";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { useRouter } from "next/navigation";

import RentAndSellCard from "../../components/rent-and-sell-card/RentAndSellCard"
import { Grid } from "@mui/material"
export default function Component() {
  let router = useRouter()

  const [units, setUnits] = useState([])
  const fetchData = async () => {
    const { properties, totalProperties } = await getAllProperties();
    setUnits(properties)
    console.log(properties)
  }
  useEffect(() => {
    fetchData();
  }, []);

  let h1 = "rent"
  return (
    <div className="container m-auto  py-10  px-3 flex justify-center w-full ">

      <Grid container className="flex justify-center gap-5 w-full">
        {
          units.map((property, index) => (
            <Grid item xs={12} sm={5.8} md={3.9} lg={3.4}>
              <RentAndSellCard property={property} key={index} h1={h1} />
            </Grid>
          ))}
      </Grid>

    </div>
  )
}