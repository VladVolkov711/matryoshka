let coll = document.getElementsByClassName('diploms__button');
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click',function(){
		this.classList.togge('active');
		let content = this.nextElementSibling();
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		}
		else {
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	})
}