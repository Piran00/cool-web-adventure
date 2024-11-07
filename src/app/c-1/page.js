"use client"
import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"rusty_door.jpg"}></Backround_img>
            <Stickbutton text1={"Pick Lock"} link1={"c-2"} link2={"b-2"} link3={"e"} link4={"e"} text2={"Go back"} text3={"/"} text4={"/"}>
                Going of to the left of the entrance you find a small rusty door with yet another lock on it
            </Stickbutton>
        </div>

    )

}
