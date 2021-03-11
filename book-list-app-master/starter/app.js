
const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const btn = document.querySelector('.btn')
const booklist = document.getElementById('book-list')

btn.addEventListener('click', function(e) {
	e.preventDefault()

	if(title.value == '' && author.value == '' && year.value == ''){
		alert('please filled every input')
	}else {
		//create new row
		const newRow = document.createElement('tr')
		//create new title
		const newTitle = document.createElement('th')
		newTitle.innerHTML = title.value
		newRow.appendChild(newTitle)

		const newAuthor = document.createElement('th')
		newAuthor.innerHTML = author.value
		newRow.appendChild(newAuthor)

		const newYear = document.createElement('th')
		newYear.innerHTML = year.value
		newRow.appendChild(newYear)

		booklist.appendChild(newRow)

		e.reset()
	}

})