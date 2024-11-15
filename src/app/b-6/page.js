import { useState } from "react";
import { Backround_img, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"static_tv.png"}></Backround_img>
            <Stickbutton text1={"Go Back"} link1={"b-4"} link2={"s"} link3={"s"} link4={"t"} text2={"/"} text3={"/"} text4={"/"}>
                As the old door swings open it reveals an empty large floor with only an old standing in the middle with the numbers 7824 on it
            </Stickbutton>
        </div>

    )

}
