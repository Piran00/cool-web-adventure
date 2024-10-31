import Link from "next/link";

export function Stickbutton({ text1, text2, text3, text4, children,link1,link2,link3,link4 }) {



    return (
        <div className="w-full fixed h-1/4 bg-slate-200/100 bottom-0 opacity-35">
            <div className="relative w-full h-full">

             <div className=" absolute text-red-800 text-4xl h-full left-[16.666%] right-[16.666%]">
             {children}
             </div>
                <Link href={link1}>
                    <button className=" absolute h-20 bg-blue-950 w-2/12 top-0 left-0 " id="top-left-button">
                        <p> {text1} </p>
                    </button>
                </Link>

                <Link href={link2}>
                <button className=" absolute h-20 bg-blue-950 w-2/12 bottom-0 left-0" id="bot-left-button">
                    <p> {text2} </p>
                </button>
                </Link>

                <Link href={link3}>
                <button className="absolute h-20 bg-blue-950 w-2/12 bottom-0 right-0" id="bot-right-button ">
                    <p> {text3} </p>
                </button>
                </Link>

                <Link href={link4}>
                <button className="absolute h-20 bg-blue-950 w-2/12 top-0 right-0" id="top-right-button " >
                    <p> {text4} </p>
                </button>
                </Link>
            </div>
        </div>
    )

}
