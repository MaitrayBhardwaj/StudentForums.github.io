let addPost = document.querySelector('a.addPost')

addPost.addEventListener('click', () => {
	document.querySelector('#newPost').style.display = 'block';
	addPost.style.display = 'none';
})

let cancelPost = document.querySelector('#cancelPost')

cancelPost.addEventListener('click', () => {
	addPost.style.display = 'inline'
	document.querySelector('#newPost').style.display = 'none'
})