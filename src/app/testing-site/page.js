"use client"
import { useState } from "react";
import { Backround_img, Num_pad, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {

    return (
        <div className="flex items-center justify-center h-screen w-screen">
           <Num_pad secret={1111} next_page_link={"test"}>
           </Num_pad>
        </div>


    )}