import { useState } from "react";
import { Backround_img, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"old-hard-drive.jpg"}></Backround_img>
            <Stickbutton text1={"/"} link1={"start"} link2={"s"} link3={"s"} link4={"t"} text2={"/"} text3={"/"} text4={"/"}>
                You finally did it
                Before lies the hard drive the forum was talking about 
                YOu hastely grab in and make your way out of the building
            </Stickbutton>
        </div>

    )

}
