let currentPicture = document.querySelector(".currentPicture")
let [left, right] = document.querySelectorAll("button")



class Picture {
  constructor(source, next = null) {
    this.source = source
    this.next = next
  }
}

class Carrousel {
  constructor() {
    this.head = null
    this.size = 0
  }

  addPicture(source) {
    this.head = new Picture(source, this.head)
  }
}



let carrousel = new Carrousel()

carrousel.addPicture("https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=6&m=636379014&s=612x612&w=0&h=tnYrf_O_nvT15N4mmjorIRvZ7lK4w1q1c7RSfrVmqKA=")
carrousel.addPicture("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")
carrousel.addPicture("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg")
carrousel.addPicture("https://ichef.bbci.co.uk/news/410/cpsprodpb/7FF7/production/_109195723_curtiswhiteside.jpg")

// let current = carrousel.head.source
// let next = carrousel.head.next.source

let current = carrousel.head
let next = carrousel.head.next

right.addEventListener("click", function() {
  // currentPicture.src = current.source
  current = next // || (or) instead of an if statement
  if (!current) {
    current = carrousel.head
    
  }
  if (!next) {
    next = carrousel.head.next
  }

  currentPicture.src = current.source
  next = next.next
  console.log(current)
})

console.log(carrousel.head.source)
currentPicture.src = carrousel.head.source

console.log(carrousel)