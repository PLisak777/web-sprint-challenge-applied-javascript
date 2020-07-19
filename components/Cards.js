// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const createCard = (object) => {
    // Create new HTML elements
    const card = document.createElement('div');
    const heading = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authImg = document.createElement('img');
    const authSpan = document.createElement('span');

    // Assign classes to new elements
    card.classList.add('card');
    heading.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // Define Content of elements
    heading.textContent = object.headline;
    authImg.src = object.authorPhoto;
    authSpan.textContent = `By ${object.authorName}`;

    // Build HTML Structure
    card.appendChild(heading);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authSpan);
    imgContainer.appendChild(authImg);

    // Event Listners
    card.addEventListener('click', (heading) => {
        console.log(heading)
    })

    //TODO: Create variables for each 'card' class. How do I tell JS to differentiate which tab is selected though?
    //TODO: addEventListener to each tab so that when clicked, it displays the articles for the corresponding topic.
    
    // const jsTab = document.querySelector('.tab')

    return card;
}

// Use forEach to call each object in the articles array

// data.articles.forEach((item) => {
//     if (topics.bootstrap = true) {
//         return item.bootstrap
//     } else if (topics.javascript) {
//         return item.javascript
//     } else if (topics.jquery) {
//         return item.jquery
//     } else if (topics.node) {
//         return item.node
//     } else if (topics.technology) {
//         return item.technology
//     }
// })

// Create Event Listeners for each topic button to switch which articles are shown based on which is clicked.
// 

const enter = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(success => {
        console.log(success)
        // TODO: Figure out how to export event listener from Tabs.js to determine which topic is being clicked on
        success.data.articles.javascript.forEach(article => {
            const newCard = createCard(article)
            enter.appendChild(newCard)
        })
    })
    .catch((error) => {
        console.log('Whoops!', error)
    })