import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"futuristic_door.jpg"}></Backround_img>
            <Stickbutton text1={"Enter Password"} link1={"e-1"} link2={"d-1"} link3={"a"} link4={"a"} text2={"Go back to look for the password"} text3={"/"} text4={"/"}>
                Theres a second way cleaner looking door with a password pad behind this one
                Seems like you will have to find the password
            </Stickbutton>
        </div>

    )

}
