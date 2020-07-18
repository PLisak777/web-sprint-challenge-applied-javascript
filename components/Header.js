// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //TODO: Create Variables
const header = document.createElement('div')
header.className.add('header')

const date = document.createElement('span')
date.classList.add('date')

const headLine = document.createElement('h1')
headLine.textContent = 'Lambda Times'

const temp = document.createElement('span')
temp.classList.add('temp')
temp.textContent = '98°'

// TODO: HTML Structure
header.appendChild(date)
header.appendChild(headLine)
header.appendChild(temp)

return header
}


