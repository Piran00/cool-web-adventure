import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"last_door.jpg"}></Backround_img>
            <Stickbutton text1={"pick lock"} link1={"d-4"} link2={"d-1"} link3={"t"} link4={"t"} text2={"go back"} text3={"/"} text4={"/"}>
                You can hear static behind the door
                Youre close now
                But the door seems to be locked with another lock
            </Stickbutton>
        </div>

    )

}
