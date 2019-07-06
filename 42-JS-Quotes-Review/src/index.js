//PATCH   //.then() and when to update inside the .then and when not to
//Optimistic vs Pessimistic Rendering

//When I click on Delete button, make a DELETE fetch, and manipulate the DOM by removing the card
document.addEventListener("DOMContentLoaded", function(){
    getFetch()
    getForm().addEventListener('submit', createQuote)
  })
  
  function createQuote(event){
    // document.querySelector('')
    event.preventDefault()
    let quoteContent = document.querySelector('#new-quote').value
    let author = document.querySelector('#author').value
  
    fetch(`http://localhost:3000/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        quote: quoteContent,
        supporters: 0,
        author: author
      })
    }).then(res => res.json())
    .then(data => {
      render(data)
    })
  }
  
  function getFetch(){
    fetch(`http://localhost:3000/quotes`)
    .then(res => res.json())
    .then(jsonData => {
      jsonData.forEach(quote => render(quote))
    })
  }
  
  function render(quote){
    let liElement = document.createElement('li')
    liElement.classList.add('card')
    liElement.id = `card-${quote.id}`
    let blockquoteEl = document.createElement('blockquote')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    // let div = document.createElement('div')
    // div.classList.add('card')
    getUl().appendChild(liElement)
    liElement.appendChild(blockquoteEl)
    blockquoteEl.append(p1, p2, p3, b1, b2)
    // div.append(b1, b2)
    p1.innerText = quote.quote
    p2.innerText = quote.author
    p3.innerText = `Supporters: ${quote.supporters}`
    b1.innerText = 'Support'
    b2.innerText = 'Delete'
    //b1 is our supporter button
    // b1.addEventListener('click', () => {increaseSupport(quote.id)})
    b1.dataset.id = quote.id
    b1.id = `button-${quote.id}`
    b1.addEventListener('click', increaseSupport)
    b2.addEventListener('click', deleteQuote)
    b2.dataset.id = quote.id
  
    p3.id = `supporter-${quote.id}`
  }
  
  function deleteQuote(event){
    let id = event.currentTarget.dataset.id
    fetch(`http://localhost:3000/quotes/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(() => {
      document.querySelector(`#card-${id}`).remove()
    })
  
  }
  
  function increaseSupport(event){
    // let id = event.currentTarget.dataset.id
    // let id = event.currentTarget.dataset.id
    let id = event.currentTarget.id.split('-')[1]
    let pEl = document.querySelector(`#supporter-${id}`)
    let supporters = pEl.innerText.split(' ')[1]
    // debugger
    fetch(`http://localhost:3000/quotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        supporters: parseInt(supporters) + 1
      })
    }).then(res => res.json())
    .then(() => {
      pEl.innerText = `Supporters: ${parseInt(supporters) + 1}`
    })
  }
  
  function getUl(){
    return document.querySelector('ul')
  }
  
  function getForm(){
    return document.querySelector('form')
  }