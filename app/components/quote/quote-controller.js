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
		<h6 class="cursor">"${quote.quote}"</h6>
		<p class="hidden">${quote.author}</p>
		</div>
		`
		quoteElem.innerHTML = template
	}
}
