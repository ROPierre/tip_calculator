// ------ Function based

// Elements Variables
let bill = document.querySelector("#bill");
let numberOfPeople = document.querySelector("#numberOfPeople")
let buttonGroup = document.querySelector(".button-group")
let customTip = document.querySelector("#customTip")
let tipValue = document.querySelector('.active').value

// Changing active tip and store value
buttonGroup.addEventListener('click', e => {
    if(e.target != buttonGroup){
        activeTip(e.target)
        
        if(e.target != customTip){
            tipChange(e.target.value)
        }
    }
})

function activeTip(tip){
    let tipsButton = buttonGroup.children
    for(let i = 0; i < tipsButton.length; i++){
        if(tip == tipsButton[i] && tip == tipsButton[tipsButton - 1]){
            tip.classList.add('active')
        } else if(tip == tipsButton[i]) {
            tip.classList.add('active')
            customTip.value = ''
        } else {
            tipsButton[i].classList.remove('active')
        }
    }
}

// Functions for get new value if: bill, number of people or tip change
bill.addEventListener('change', () => {
    bill.value = bill.value != '' ? bill.value : 0

    if(validateValue(bill)){
        let total = totalPerPerson(bill.value, numberOfPeople.value);
        let tip = tipPerPerson(total, tipValue)
        writeResultValue(total, tip)
    }
    
})

numberOfPeople.addEventListener('change', () => {
    numberOfPeople.value = numberOfPeople.value != '' ? numberOfPeople.value : 0

    if(validateValue(numberOfPeople)){
        let total = totalPerPerson(bill.value, numberOfPeople.value);
        let tip = tipPerPerson(total, tipValue)
        writeResultValue(total, tip)
    }
})

// Changing tips
customTip.addEventListener('change', () => {
    customTip.value = customTip.value != '' ? customTip.value : 0
    tipValue = customTip.value
    if(validateValue(numberOfPeople) && validateValue(bill)){
        let total = totalPerPerson(bill.value, numberOfPeople.value);
        let tip = tipPerPerson(total, tipValue)
        writeResultValue(total, tip)
    }
})
function tipChange(value){
    tipValue = value
    if(validateValue(numberOfPeople) && validateValue(bill)){
        let total = totalPerPerson(bill.value, numberOfPeople.value);
        let tip = tipPerPerson(total, tipValue)
        writeResultValue(total, tip)
    }
}

// Calculate total per person and tip tip per person
function totalPerPerson(bill, people){
    return (bill/people) == "NaN" ? 0 : (bill/people).toFixed(2)
}
function tipPerPerson(total, tip){
    return (total * (tip / 100)).toFixed(2)
}

// Write result value on DOM
function writeResultValue(total, tip){
    if(total == '' || total == 'NaN' || total == NaN) total = '0.00'
    if(tip == '' || tip == 'NaN' || tip == NaN) tip = '0.00'
    document.querySelector('.total-value').innerHTML = total
    document.querySelector('.tip-value').innerHTML = tip
}

// Validate values
function validateValue(n){
    n.value = parseFloat(n.value)

    let errorMessage;
    if(n.attributes['id'].value == 'bill'){
        errorMessage = document.querySelectorAll('.error_message')[0]
    } else {
        errorMessage = document.querySelectorAll('.error_message')[1]
    }

    if (n.value == 0 || n.value == "" || n.value == 'NaN'){
        n.parentElement.classList.add("input--error")
        errorMessage.style = 'display: inline'
        return false;
    }
    errorMessage.style = 'display: none'
    n.parentElement.classList.remove("input--error")
    return true;
}

function reset(){
    bill.value = 0;
    numberOfPeople.value = 1
    customTip.value = ''
    tipValue = document.querySelector('.active').value 
    
    activeTip(document.querySelector('#tip15'))

    writeResultValue('0.00', '0.00')

}
