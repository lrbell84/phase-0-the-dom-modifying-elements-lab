const main = document.querySelector('#main')
main.remove()// Write your code here!

const newHeader = document.createElement('h1')

newHeader.setAttribute("id", "victory")

newHeader.innerHTML = "Lydia is the champion"
document.body.append(newHeader)
