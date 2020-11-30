const form = document.querySelector('form');
const header = document.querySelector('input[name="headerText"]');
const inputImage = document.querySelector('input[name="inputImage"]');
const footer = document.querySelector('input[name="footerText"]');
const memes = document.querySelector('div');

form.addEventListener('submit', handleSubmit);
memes.addEventListener('click', deleteMeme);

function handleSubmit(e) {
	e.preventDefault();
	createMeme(header.value, inputImage.value, footer.value);
	form.reset();
}

function createMeme(text1, src, text2) {
	let newMeme = document.createElement('DIV');
	let topText = document.createElement('H4');
	let bottomText = document.createElement('H4');

    newMeme.classList.add('meme');
	topText.classList.add('top-text');
	bottomText.classList.add('bottom-text');

    document.querySelector('hr').style.opacity = 1;
    document.querySelector('.message').style.opacity = 1

	memes.appendChild(newMeme);
	newMeme.appendChild(topText);
	newMeme.appendChild(bottomText);

	topText.innerText = text1;
	newMeme.style.backgroundImage = `url(${src})`;
	newMeme.style.backgroundSize = 'cover';
	bottomText.innerText = text2;
}

function deleteMeme(e) {
	const item = e.target;
	if (item.classList[0] === 'meme') {
		item.remove();
	}
}

