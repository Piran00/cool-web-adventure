"use client"
import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"main_entrance.jpg"}></Backround_img>
            <Stickbutton text1={"Enter Passcode"} link1={"b-4"} link2={"b-2"} link3={"e"} link4={"e"} text2={"Go back"} text3={"/"} text4={"/"}>
                The main entrance is closed tight but to the side of it you find a seemingly still working numberpad
            </Stickbutton>
        </div>

    )

}
