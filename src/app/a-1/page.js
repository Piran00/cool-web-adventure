"use client"
import { useState } from "react";
import { Backround_img, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"fence.jpg"}></Backround_img>
            <Stickbutton text1={"Go Back"} link1={"start"} link2={"s"} link3={"s"} link4={"t"} text2={"/"} text3={"/"} text4={"/"}>
                There seems to be no way into the warehouse but theres a strange paper not pinned to a tree it has the numbers 5244 on it
            </Stickbutton>
        </div>

    )

}
