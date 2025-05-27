async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "your_api_key"; // Replace with real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById('result').innerText =
    `Temperature in ${city}: ${data.main.temp} °C`;
}