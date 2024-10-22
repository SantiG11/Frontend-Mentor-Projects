const questions = document.querySelectorAll('.question');


questions.forEach(question => {

    const minusIcon = question.querySelector('.minus-icon');
    const plusIcon = question.querySelector('.plus-icon');
    const answer = question.parentElement.querySelector('.answer');

    let active = false;

    const checkStatus = () => {
        if(active) {
            minusIcon.style.display = "block";
            plusIcon.style.display = "none";
            answer.style.display = "block";
        } else {
            minusIcon.style.display = "none";
            plusIcon.style.display = "block";
            answer.style.display = "none";
        }
    }

    question.addEventListener('click', () => {
        active ? active = false : active = true;
        console.log(active)

        checkStatus();
    })

    checkStatus();
})

