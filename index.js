import weatherCheck from "./src/getData.js";

const dataCheck = (city) => {
    if(typeof city !== "string") return
    const cityData = weatherCheck(city)
    // if(!(weatherCheck instanceof Array)) return
    console.log(`Data cuaca di ${city}: ${cityData}`)
}
dataCheck("makassar")

