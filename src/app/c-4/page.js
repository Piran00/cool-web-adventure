import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"corridor.jpg"}></Backround_img>
            <Stickbutton text1={"Go back"} link1={"c-3"} link2={"a"} link3={"a"} link4={"a"} text2={"/"} text3={"/"} text4={"/"}>
                All the doors in the corridor seem locked but at the end of it theres a analog tv somehow still on
                It displays the words "ut supra, ut infra"
            </Stickbutton>
        </div>

    )

}
