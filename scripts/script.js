// ------ Function based

// Storing the values
let bill = document.querySelector("#bill");
let numberOfPeople = document.querySelector("#numberOfPeople");

// If bill, number of people or tip change, calculate the new value
bill.addEventListener('change', (e) => {
    e.preventDefault()
    let total = totalPerPerson(bill.value, numberOfPeople.value);
    tip = tipPerPerson(total, 15)

    console.log(total, tip)
})
numberOfPeople.addEventListener('change', (e) => {
    e.preventDefault()
    let total = totalPerPerson(bill.value, numberOfPeople.value);
    let tip = tipPerPerson(total, 15)
})

// Calculate total per person and tip tip per person
function totalPerPerson(bill, people){
    return total = (bill/people);
}
function tipPerPerson(total, tip){
    return tip = total * (tip / 100);
}
