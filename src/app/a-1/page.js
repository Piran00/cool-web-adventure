"use client"
import { useState } from "react";
import { Backround_img, Pop_Over, Stickbutton, } from "../components/components1";

export default function Webventure() {
    const [is_hidden, set_hidden] = useState(true)

    return (
        <div>
            <button onClick={function () { set_hidden(!is_hidden) }}>negro</button>
            <Pop_Over is_hidden={is_hidden} ></Pop_Over>

        </div>

    )

}
