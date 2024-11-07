import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"wall.jpg"}></Backround_img>
            <Stickbutton text1={"Go right"} link1={"c-4"} link2={"d-1"} link3={"a"} link4={"a"} text2={"Go left"} text3={"/"} text4={"/"}>
             As the door swings open it reveals a long and dark corridor to the right and a staircase to the left
            </Stickbutton>
        </div>

    )

}
