const API_KEY = "70e248149c2748ab8f2e276f831a1e40"
const API = "https://api.openweathermap.org/data/2.5/weather?"

const weatherCheck = (city) => {
    const url = `${API}q=${city}&appid=${API_KEY}`
    fetch (url)
    .then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    })
    .then((weatherCity) => {
        console.log(weatherCity.weather)
    })
    .catch((err) => {
        if(err instanceof Error) console.log(err.message)
    })
}
weatherCheck()

export default weatherCheck
