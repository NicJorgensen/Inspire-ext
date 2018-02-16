function QuoteController() {

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(function (quote) {
		qs.getQuote(draw)
	})

	function draw(res) {
		var quote = res
		template = `
		<h3>"${quote.quote}"</h3>
		<p>${quote.author}</p>
		<a href="${quote.permalink}">Source</a>
		`
		quoteElem.innerHTML = template
	}


}
