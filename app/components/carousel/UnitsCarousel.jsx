"use client";
import { Grid } from "@mui/material";
import React, { useState, useContext } from "react";
import { Context, ContextData } from "../../network/context";

export default function UnitsCarousel({unit}) {
    const images = unit?.propertyImage?.length > 0 ? unit.propertyImage : [
        {
            img: "https://prod-images.cooingestate.com/processed/property_image/image/164288/high.webp",
        },
        {
            img: "https://prod-images.cooingestate.com/processed/property_image/image/164283/high.webp",
        },
        {
            img: "https://prod-images.cooingestate.com/processed/property_image/image/164284/high.webp",
        },
        {
            img: "https://prod-images.cooingestate.com/processed/property_image/image/164285/high.webp",
        },
        {
            img: "https://prod-images.cooingestate.com/processed/property_image/image/164286/high.webp",
        },
        {
            img: "https://prod-images.cooingestate.com/processed/property_image/image/164287/high.webp",
        },
    ];
    let { toggle } = useContext(Context);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (

            <div>
                <Grid container className="flex justify-center">
                    <Grid item xs={12} lg={10.8}>
                        <div className="flex gap-3 overflow-hidden w-full">
                            {images && images?.map((item, index) => {
                                const flexClass =
                                    hoveredIndex === null
                                        ? index === 0
                                            ? "flex-[1]"
                                            : "flex-[0.2]"
                                        : hoveredIndex === index
                                            ? "flex-[1]"
                                            : "flex-[0.2]";

                                return (
                                    <div
                                        className={`${flexClass} transition-all ${index == 0 ? "grayscale-0" : "grayscale-75"}  hover:grayscale-0 duration-500 ease-in-out`}
                                        key={index}
                                        onMouseOver={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => {
                                            toggle()
                                        }}
                                    >
                                        <img
                                            src={item.img || item}
                                            alt="..."
                                            className="h-[65vh] w-full object-cover cursor-pointer "
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </Grid>
                </Grid>
            </div>

    );
}
