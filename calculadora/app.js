const container = document.querySelector('.container');
const error = document.querySelector('.error');

function getAge(){
    const dobValue = document.getElementById('dob').value;

    //if el valor dob es falso, retorna
    if(!dobValue) return;

    //almacena dob
    let dob = new Date();

    //fecha actual
    const today = new Date();

    let diff = today - dob;
    let age = diff/(1000 * 60 * 60 * 24 * 365);

    calcAge(age);
}

function calcAge(age){
    let year = Math.floor(age);
    let remainingYear = age - year;

    let monthDiff = remainingYear * 12;
    let month = Math.floor(monthDiff);

    let remainingMonth = monthDiff - month;
    let day = Math.floor(remainingMonth * 30);

    //visualiza la edad
    displayAge(year, month, day);
}

function displayAge(year, month, day) {
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = year;
    months.innerText = month;
    days.innerText = day;

    if(year >= 0){
        error.style.display = 'none';
    }
    if(year < 0){
        error.style.display = 'block';
    }
}

container.addEventListener('input',getAge);