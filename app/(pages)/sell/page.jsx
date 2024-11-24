"use client";
import React, { useState, useEffect } from "react";
import CardSteps from "@/app/components/CardSteps";
import { BsHouseAdd } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RentAndSellCard from "@/app/components/rent-and-sell-card/RentAndSellCard";
import { getAllProperties } from "@/actions/propertiesAction"
import { Grid } from "@mui/material";


export default function Sell() {
  const steps = [
    { id: 1, title: "List Your Property Details", description: "Add all the information related to your property" },
    { id: 2, title: "One Of Our Agents Will Call You", description: "We will help you find the best buyer" },
    { id: 3, title: "Meet With Serious Buyers", description: "Final step to sell your property" },
  ];

  let h1 = "sell"

  const [message, setMessage] = useState({
    name: "",
    phone: "",
    location: "",
    compound: "",
    propertyType: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  const [units, setUnits] = useState([])
  const fetchData = async () => {
    const { properties, totalProperties } = await getAllProperties();
    setUnits(properties)
    console.log(properties)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    // <div className="min-h-screen bg-gray-100 p-10">
    //   <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
    //     <div className="head text-center my-8">
    //       <div className="icon">
    //         <BsHouseAdd className="text-8xl mx-auto text-text-color" />
    //       </div>
    //       <div className="title">
    //         <h1 className="text-text-color text-3xl font-bold">
    //           Sell Your Property With {process.env.NEXT_PUBLIC_NAME_SITE || "Canva"}
    //         </h1>
    //       </div>
    //     </div>
    //     <div className="steps grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
    //       {steps.map((step, index) => (
    //         <CardSteps key={index} step={step} />
    //       ))}
    //     </div>
    //     <div className="form w-full max-w-5xl my-5">
    //       <Card className="bg-slate-50 shadow-md w-full flex flex-col">
    //         <CardHeader>
    //           <CardTitle className="text-2xl font-bold">Complete The Form</CardTitle>
    //           <p className="text-sm text-muted-foreground">
    //             Your privacy is important to us. We won&apos;t publish or share your information with anyone.
    //           </p>
    //         </CardHeader>
    //         <CardContent>
    //           <form className="space-y-4" onSubmit={handleSubmit}>
    //             <div className="grid gap-4 md:grid-cols-2">
    //               <div>
    //                 <Input
    //                   name="name"
    //                   value={message.name}
    //                   onChange={handleChange}
    //                   placeholder="Your Name"
    //                 />
    //               </div>
    //               <div className="flex gap-2">
    //                 <Select
    //                   onValueChange={(value) => handleSelectChange("phonePrefix", value)}
    //                 >
    //                   <SelectTrigger className="w-[100px]">
    //                     <SelectValue placeholder="🇪🇬 +20" />
    //                   </SelectTrigger>
    //                   <SelectContent>
    //                     <SelectItem value="+20">🇪🇬 +20</SelectItem>
    //                     <SelectItem value="+1">🇺🇸 +1</SelectItem>
    //                     <SelectItem value="+44">🇬🇧 +44</SelectItem>
    //                   </SelectContent>
    //                 </Select>
    //                 <Input
    //                   name="phone"
    //                   value={message.phone}
    //                   onChange={handleChange}
    //                   className="flex-1"
    //                   placeholder="Phone Number"
    //                   type="tel"
    //                 />
    //               </div>
    //             </div>

    //             <div className="grid gap-4 md:grid-cols-2">
    //               <Select
    //                 onValueChange={(value) => handleSelectChange("location", value)}
    //               >
    //                 <SelectTrigger>
    //                   <SelectValue placeholder="Location" />
    //                 </SelectTrigger>
    //                 <SelectContent>
    //                   <SelectItem value="cairo">Cairo</SelectItem>
    //                   <SelectItem value="giza">Giza</SelectItem>
    //                   <SelectItem value="alexandria">Alexandria</SelectItem>
    //                 </SelectContent>
    //               </Select>

    //               <Select
    //                 onValueChange={(value) => handleSelectChange("compound", value)}
    //               >
    //                 <SelectTrigger>
    //                   <SelectValue placeholder="Compound" />
    //                 </SelectTrigger>
    //                 <SelectContent>
    //                   <SelectItem value="compound1">Compound 1</SelectItem>
    //                   <SelectItem value="compound2">Compound 2</SelectItem>
    //                   <SelectItem value="compound3">Compound 3</SelectItem>
    //                 </SelectContent>
    //               </Select>
    //             </div>

    //             <Select
    //               onValueChange={(value) => handleSelectChange("propertyType", value)}
    //             >
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Property Type" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem value="apartment">Apartment</SelectItem>
    //                 <SelectItem value="villa">Villa</SelectItem>
    //                 <SelectItem value="house">House</SelectItem>
    //                 <SelectItem value="land">Land</SelectItem>
    //               </SelectContent>
    //             </Select>

    //             <Textarea
    //               name="description"
    //               value={message.description}
    //               onChange={handleChange}
    //               placeholder="Description"
    //               className="min-h-[120px]"
    //             />

    //             <Button type="submit" className="w-full bg-[#1d3a5f] hover:bg-[#284875]" size="lg">
    //               Submit
    //             </Button>
    //           </form>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </div>
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
  );
}
