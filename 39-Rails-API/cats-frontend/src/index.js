document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM loaded')
  //addEventListener to form
  document.querySelector('form').addEventListener('submit', Cat.createCat)
  Hobby.fetchHobbies()
  Cat.fetchCats()
})
