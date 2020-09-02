import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";

const button = makeButton("Yoki");
document.body.appendChild(button);
console.log(nav, top, bottom, makeButton("yolo"));
