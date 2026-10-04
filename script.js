// Simulated sensor data
function generateWeatherData() {

    // Temperature between 24°C and 35°C
    const temperature = (24 + Math.random() * 11).toFixed(1);

    // Humidity between 40% and 80%
    const humidity = Math.floor(40 + Math.random() * 40);

    // Pressure between 1000 and 1020 hPa
    const pressure = Math.floor(1000 + Math.random() * 20);

    return {
        temperature,
        humidity,
        pressure
    };
}


// Update the weather display
function updateWeather() {

    const data = generateWeatherData();

    document.getElementById("temperature").textContent =
        data.temperature + " °C";

    document.getElementById("humidity").textContent =
        data.humidity + " %";

    document.getElementById("pressure").textContent =
        data.pressure + " hPa";

    // Current time
    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString();

    // Determine weather condition
    let condition;

    if (data.temperature >= 32) {
        condition = "☀️ Hot";
    }
    else if (data.humidity >= 70) {
        condition = "💧 Humid";
    }
    else if (data.temperature <= 26) {
        condition = "🌥️ Cool";
    }
    else {
        condition = "🌤️ Pleasant";
    }

    document.getElementById("condition").textContent =
        condition;

    // Update chart
    updateChart(data.temperature);
}


// Update temperature chart
function updateChart(temperature) {

    const chart = document.getElementById("chart");

    const bars = chart.querySelectorAll(".bar");

    // Move old bars
    for (let i = 0; i < bars.length - 1; i++) {
        bars[i].style.height = bars[i + 1].style.height;
    }

    // Convert temperature to chart height
    let height = ((temperature - 20) / 20) * 100;

    height = Math.max(10, Math.min(100, height));

    bars[bars.length - 1].style.height =
        height + "%";
}


// Initial reading
updateWeather();

// Update every 2 seconds
setInterval(updateWeather, 2000);
