function ImageController() {

	var imageService = new ImageService()

	function getImage() {
		imageService.getImage(draw)
	}

	function draw(res) {
		template = `
		url('${res.url}')
		`
		document.body.style.backgroundImage = template
	}

	getImage()

}


