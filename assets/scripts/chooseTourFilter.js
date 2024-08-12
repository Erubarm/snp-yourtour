buttonList = document.querySelectorAll('.choose-tour__filter')

buttonList.forEach(button => {
	button.addEventListener('click', function () {
		buttonList.forEach(btn => {
			btn.classList.remove('choose-tour__filter__focus')
			btn.classList.add('choose-tour__filter__unfocus')
		})

		this.classList.remove('choose-tour__filter__unfocus')
		this.classList.add('choose-tour__filter__focus')
	})
})
