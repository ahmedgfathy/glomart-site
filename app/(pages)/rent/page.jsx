"use client"
import {useEffect, useState} from "react"

import { getAllProperties } from "@/actions/propertiesAction"

import CardProperty from "@/app/components/CardProperty"

export default function Component() {
    const [units, setUnits] = useState([])
    const fetchData = async()=>{
        const {properties, totalProperties} = await getAllProperties();
        setUnits(properties)
        console.log(properties)
      }
      useEffect(() => {
        fetchData();
      }, []);      
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((property) => (
          <CardProperty key={property.$id} property={property} />
        ))}
      </div>
    </div>
  )
}