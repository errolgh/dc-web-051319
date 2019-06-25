console.log('connected')

document.addEventListener("DOMContentLoaded", function() {

})

function addInstructor(firstName, lastName, email) {
    // grab tbody of the table
    let tbody = document.querySelector('tbody')
    // create a new tr
    let new_tr = document.createElement("tr")
    tbody.appendChild(new_tr)
    let newId = tbody.children.length
    // add three td elements to tr
    let firstNameEl = document.createElement("td")
    firstNameEl.classList.add("firstName")
    firstNameEl.innerText = firstName
    new_tr.appendChild(firstNameEl)

    let lastNameEl = document.createElement("td")
    lastNameEl.classList.add("lastName")
    lastNameEl.innerText = lastName
    new_tr.appendChild(lastNameEl)

    let emailEl = document.createElement("td")
    emailEl.classList.add("email")
    emailEl.innerText = email
    new_tr.appendChild(emailEl)
    
    // attach the new tr to the tbody
    new_tr.id = `row-${newId}`
}

