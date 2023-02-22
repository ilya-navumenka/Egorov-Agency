import { Modal } from "./js/Modal";

//Modal
window.onload = function() {
    addToolsClickHandler();
}

const addToolsClickHandler = () => {
    document.querySelector('.form__button').addEventListener('click', () => {
        generateToolsModal();
    })
}

const generateToolsModal = () => {
    renderModalWindow('');
}

const renderModalWindow = (content) => {
    let modal = new Modal ('tools-modal');
    modal.buildModal(content);
}

//Time
document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('May 31 2023 00:00:00');
	
	const daysVal = document.querySelector('.time__days .time__val');
	const hoursVal = document.querySelector('.time__hours .time__val');
	const minutesVal = document.querySelector('.time__minutes .time__val');
	const secondsVal = document.querySelector('.time__seconds .time__val');

	const time = () => {
		let now = new Date();
		let leftUntil = newYear - now;
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;
	};

	time();
	setInterval(time, 1000);
});

//Valid
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form)

        if(!error) {
            form.classList.add('_sending');
            let response = await fetch(sendmail.php, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
				// generateToolsModal();
                alert(result.message);
                form.reset();
                form.classList.add('_sending');
            } else {
                alert('Ошибка');
                form.classList.add('_sending');
            }
        } else {
            console.log('Заполни обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if(input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
