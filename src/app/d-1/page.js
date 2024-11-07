import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"stairs.jpg"}></Backround_img>
            <Stickbutton text1={"Push on downwards"} link1={"d-2"} link2={"d-3"} link3={"s"} link4={"s"} text2={"Push on upwards"} text3={"/"} text4={"/"}>
                The stairs are so dark you can barely see the bottom

            </Stickbutton>
        </div>

    )

}
