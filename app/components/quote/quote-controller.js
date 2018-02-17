function QuoteController() {

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(function (quote) {
		qs.getQuote(draw)
	})

	function draw(res) {
		var quote = res
		template = `
		<div class="bg-2">
		<h6>"${quote.quote}"</h6>
		<p>${quote.author}</p>
		</div>
		`
		quoteElem.innerHTML = template
	}
}
