"use client"
import { useState } from "react";
import { Backround_img, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {
    const [is_hidden, set_hidden] = useState(true)

    return (
        <div>
            <button onClick={function () { set_hidden(!is_hidden) }} className="">Pick Lock</button>
            <Pop_Over is_hidden={is_hidden} secret1={17} secret2={47} secret3={49} next_page_link={"b-2"}>Pick Lock</Pop_Over>
        </div>

    )

}
