"use client"
import Link from "next/link";
import { useState } from "react";
import Typewriter from 'typewriter-effect';

export function Stickbutton({ text1, text2, text3, text4, children, link1, link2, link3, link4 }) {



    return (
        <div className="w-full fixed h-1/4 bg-black bottom-0 ">
            <div className="relative w-full h-full">

                <div className=" absolute text-red-700 text-4xl h-full left-[16.666%] right-[16.666%]">
                    <Typewriter options=
                        {{
                            strings: [children],
                            autoStart: true,
                            loop: false,
                            cursor: "▼",

                            deleteSpeed: Infinity

                        }}>
                    </Typewriter>
                </div>
                <Link href={link1}>
                    <button className=" absolute h-20 bg-red-950 w-2/12 top-0 left-0 rounded-r-md rounded-t-none" id="top-left-button ">
                        <p> {text1} </p>
                    </button>
                </Link>

                <Link href={link2}>
                    <button className=" absolute h-20 bg-red-950 w-2/12 bottom-0 left-0 rounded-r-md rounded-b-none " id="bot-left-button">
                        <p> {text2} </p>
                    </button>
                </Link>

                <Link href={link3}>
                    <button className="absolute h-20 bg-red-950 w-2/12 bottom-0 right-0 " id="bot-right-button " style={{ borderTopLeftRadius: "0.375rem" }}>
                        <p> {text3} </p>
                    </button>
                </Link>

                <Link href={link4}>
                    <button className="absolute h-20 bg-red-950 w-2/12 top-0 right-0" id="top-right-button " style={{ borderBottomLeftRadius: "0.375rem" }} >
                        <p> {text4} </p>
                    </button>
                </Link>
            </div>
        </div>
    )

}
export function Backround_img({ img_path }) {
    return (

        <div className="h-[75vh] w-full flex items-center justify-center">
            <img src={img_path} className=" h-full ">
            </img>
        </div>
    )


}
export function Pop_Over({ is_hidden}) {
    const [slider_cur_val1,set_slider1] = useState(5)
    const [slider_cur_val2,set_slider2] = useState(5)
    const [slider_cur_val3,set_slider3] = useState(5)
    const total_val = slider_cur_val1 + slider_cur_val2 + slider_cur_val3;

    if (!is_hidden) {


        return (
            <div>
                <div className="blur-md bg-red-600 opacity-20 h-full w-full fixed top-0 left-0 z-[-1]">

                </div>
                <div className="items-center justify-center flex-col flex fixed m-auto inset-x-0 inset-y-0 w-[480px] h-[220px] bg-slate-700 rounded-md z-[2]" >
                    <div className="w-full h-[45%]">

                    </div>
                    <p className="font-medium">{total_val}</p>
                    <input type="range" min="1" max="10" value={slider_cur_val1} className="w-80 h-6" onChange={function(val) {set_slider1(Number(val.target.value))}}></input>
                    <input type="range" min="1" max="10" value={slider_cur_val2} className="w-80 h-6" onChange={function(val) {set_slider2(Number(val.target.value))}}></input>
                    <input type="range" min="1" max="10" value={slider_cur_val3} className="w-80 h-6" onChange={function(val) {set_slider3(Number(val.target.value))}}></input>

                </div>
            </div>
        )
    }
}
