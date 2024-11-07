import { Backround_img, Stickbutton, } from "../components/components1";

export default function Webventure() {


    return (
        <div>
            <Backround_img img_path={"warehouse_front.jpg"}></Backround_img>
            <Stickbutton text1={"Try the main entrance"} link1={"b-3"} link2={"c-1"} link3={"start"} link4={"start"} text2={"Look for a side Entrance"} text3={"Go back"} text4={"/"}>
                The gate opens after you succesfully pick the lock
                The Warehouse itself is smaller than expected
            </Stickbutton>
        </div>

    )

}
