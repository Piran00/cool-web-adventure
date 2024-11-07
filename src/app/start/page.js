import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"rusty_gate.jpg"}></Backround_img>
            <Stickbutton text1={"try another way"} link1={"a-1"} link2={"b-1"} link3={"start"} link4={"start"} text2={"try to pick the lock"} text3={"/"} text4={"/"}>
                You arrive at the location, a run down Warehouse
                Before you stands a rusty gate with a suprisingly intact lock on it
            </Stickbutton>
        </div>

    )

}
