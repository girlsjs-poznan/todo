const input = document.querySelector('.guest_name');
const button = document.querySelector('.add_btn');

let guestName;


function display() {
	if(localStorage.getItem('guestName')) {
		input.value = localStorage.getItem('guestName');
	} else {
		console.log(0)
	}
}

function getName() {
	guestName = input.value;
	localStorage.setItem('guestName', guestName);

	console.log(localStorage.getItem('guestName'));
}

button.addEventListener('click', getName);
display();