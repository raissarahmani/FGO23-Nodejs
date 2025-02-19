import {weatherCheck} from "./src/getData.js"

const dataCheck = () => {
    if(typeof city !== "string") return
    if(!(weatherCheck instanceof Array)) return
}
dataCheck(weatherCheck)