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
		<h4><i class="fas fa-cloud white-text"></i> ${res.name} ${convertToF(res.main.temp)} &#x2109</h4>
		<p>High: <b>${convertToF(res.main.temp_max)}&#x2109</b> Low: <b>${convertToF(res.main.temp_min)}&#x2109</b></p>
		`
		weatherElem.innerHTML = template
	}

	function convertToF(K) {
		var F = (9 / 5)*(K - 273) + 32
		return Math.trunc(F)
	}
} 
