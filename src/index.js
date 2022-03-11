let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  getToys()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
   //add
    })
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
    toyFormContainer.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(e.target.name.value, e.target.image.value)
    })
});


function getToys(){
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(data => {
    data.forEach(toy => renderToy(toy))
  })
}

const toyBox = document.getElementById('toy-collection')

function renderToy(toy){
    const card = document.createElement("div")
    const head = document.createElement("h2")
    const image = document.createElement("img")
    const pTag = document.createElement("p")
    const likeButton = document.createElement("button")
    head.innerText = toy.name
    image.className = ("toy-avatar")
    image.src = toy.image
    pTag.innerText = toy.likes
    card.className = "card"
    likeButton.className = ("like-btn")
    likeButton.innerText = "Likes"
    
    card.append(head, image, pTag, likeButton)
    toyBox.appendChild(card)
}

function newToy(){

}