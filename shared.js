/*var plan = document.querySelectorAll('.plan')
console.dir(plan)

var backdrop = document.querySelector('.backdrop')
console.dir(backdrop)
backdrop.style.display = 'block';*/

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');

var selectModalNegative = document.querySelector('.modal button');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', function () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})

selectModalNegative.addEventListener('click', function () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})


function closeModal () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}



