const rateBtns = document.querySelectorAll(".rate");
const submitBtn = document.getElementById('submit-button');
const msgContainer = document.querySelector('.message-container');
const ratingContainer = document.querySelector('.rating-container');
const finalRate = document.querySelector('.final-rate');


let rate = 0

const setRate = (rateSelected) => {
    rate = parseInt(rateSelected)
    console.log(rate)
}

rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener('click', ()=> {

        rateBtns.forEach(btn => btn.classList.remove('active'));

        rateBtn.classList.add('active')
        let rateSelected = parseInt(rateBtn.textContent);
        setRate(rateSelected)
    })
})


submitBtn.addEventListener('click', ()=> {
    if(rate) {
    msgContainer.style.display = 'flex';
    ratingContainer.style.display = 'none';
    finalRate.textContent = rate;
} else {
    alert("Please select a number")
}
})