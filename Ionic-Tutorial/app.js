const calculateBtn = document.querySelector('#cal');
const resetBtn = document.querySelector('#reset');
const result = document.getElementById('result');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const calculateBMI=()=>{
    const enteredHeight = heightInput.value;
    const enteredWeight = weightInput.value;
    const bmi = enteredWeight/(enteredHeight*enteredHeight);
    if(isNaN(bmi))
    return
    const resElement = document.createElement('ion-card');
    resElement.innerHTML=`
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;
    result.innerHTML="";
    result.appendChild(resElement);
}
const resetForm = ()=>{
    heightInput.value="";
    weightInput.value="";
    result.innerHTML="";
}
calculateBtn.addEventListener('click',calculateBMI);
resetBtn.addEventListener('click',resetForm);