
document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
})

function fetchBooks() {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(books => books.forEach(book => createBook(book)))
}

function createBook(book) {
   let li = document.createElement("li")
   li.innerText = book.title
   li.addEventListener("click", () => {
       showBookDetails(book)
    })

   getList().appendChild(li)
}

function showBookDetails(book) {
    getPanel().innerHTML = ""
    
    // create h2
   let h2 = document.createElement('h2')
   h2.innerText = book.title
   // create image
   let img = document.createElement('img')
   img.src = book.img_url
    // create description
    let p = document.createElement("p")
    p.innerText = book.description
    // create ul
    let ul = document.createElement("ul")
    ul.dataset.ulId = book.id

    // append elements to div
    getPanel().append(h2, img, p, ul)

    // get and create users li
    book.users.forEach(user => {
        createUser(user, ul)
    })
    // create button
    let button = document.createElement('button')
    button.innerText = "Read Book"
    button.addEventListener('click', function() {
        addUser(book)
    })
    // append button to div
    getPanel().appendChild(button)

}

function addUser(book) {
    let me = {"id":1, "username":"pouros"}

    

   let foundUser = book.users.find(userObj => {
       return userObj.id === me.id
   })

   console.log(foundUser)
   console.log(me)

 

   if (foundUser) {
       alert("You already read this book")
   } else {
    let usersArray = book.users
    
    usersArray.push(me)
  

    fetch(`http://localhost:3000/books/${book.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            users: usersArray
        })
    })
    .then(response => response.json())
    .then(book => showBookDetails(book))
   }
}

function createUser(user, ul) {
    let li = document.createElement('li')
    li.innerText = user.username
    li.dataset.userId = user.id

    ul.appendChild(li)
    
}

function getList() {
    return document.getElementById("list")
}

function getPanel() {
    return document.getElementById("show-panel")
}