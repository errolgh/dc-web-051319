let form = document.getElementById("create-task-form")
let userInput = document.getElementById("new-task-description")
let ul = document.getElementById("tasks")
let selectDropDown = document.getElementById("select-task-form")

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener('submit', createTask)
})

function createTask(event) {
  event.preventDefault()

  let li = document.createElement("li")
  li.innerText = userInput.value

  let btn = document.createElement("button")
  btn.innerText = "X"
  btn.addEventListener('click', deleteTask)

  li.appendChild(btn)

  switch(selectDropDown.value) {
    case "High":
      li.style.color = "red"
      li.classList.add("high")
      ul.insertBefore(li, document.querySelector(".medium") || document.querySelector(".low"))
      break;
    case "Medium":
      li.style.color = "yellow"
      li.classList.add("medium")
      ul.insertBefore(li, document.querySelector(".low"))
      break;
    case "Low": 
      li.style.color = "green"
      li.classList.add('low')
      ul.appendChild(li)
      break
    default:
      li.style.color = "black"
      ul.appendChild(li)
  }

 

  form.reset()
}

function deleteTask(event) {
  let parentLi = event.target.parentElement
  parentLi.remove()

}

