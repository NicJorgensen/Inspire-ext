function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')

	weatherService.getWeather(function (weather) {

		console.log(weather)
		draw(weather)
	})

	function draw(res) {
		var template = `
		<h4>${res.name}</h4>
		<h5>${convertToF(res.main.temp)}</h5>
		<p>High: ${convertToF(res.main.temp_max)} Low: ${convertToF(res.main.temp_min)}</p>
		`
		weatherElem.innerHTML = template
	}

	function convertToF(K) {
		var F = (9 / 5)*(K - 273) + 32
		return Math.trunc(F)
	}
} 
