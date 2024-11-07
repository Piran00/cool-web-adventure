"use client"
import { useState } from "react";
import { Backround_img, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"404error.jpg"}></Backround_img>
            <Stickbutton text1={"Go Back"} link1={"start"} link2={"b-2"} link3={"s"} link4={"t"} text2={"test2"} text3={"test3"} text4={"test4"}>
                test test test
            </Stickbutton>
        </div>

    )

}
