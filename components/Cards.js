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
    const card = document.createElement('div');
    const heading = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authImg = document.createElement('img');
    const authSpan = document.createElement('span');

    card.classList.add('card');
    heading.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    heading.textContent = object.headline;
    authImg.src = object.authorPhoto;
    authSpan.textContent = `By ${object.authorName}`;

    card.appendChild(heading);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authSpan);
    imgContainer.appendChild(authImg);



    return card;
}

const enter = document.querySelector('.cards-container')

    // Created array to identify tab content from Tabs.js in order to create event listeners and display corresponding articles
    // const tabArray = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    //     .then((response) => {
    //         const jsTab = response.data.topics[0];
    //         const bootTab = response.data.topics[1];
    //         const techTab = response.data.topics[2];
    //         const jQueryTab = response.data.topics[3];
    //         const nodeTab = response.data.topics[4];
    //     })            

    //     jsTab.addEventListener('click', (tab) => {
    //         axios.get('https://lambda-times-backend.herokuapp.com/articles')
    //         .then(response => {
    //             console.log(response)
    //             tab.forEach(article => {
    //                 const newCard = createCard(article)
    //                 enter.appendChild(newCard)
    //             })
    //         })
    //         .catch((error) => {
    //             console.log('Whoops!', error)
    //         })
    //     })



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        // TODO: Figure out how to export event listener from Tabs.js to determine which topic is being clicked on
        response.data.articles.javascript.forEach(article => {
            const newCard = createCard(article)
            enter.appendChild(newCard)
            // Add Event Listener to log headline to console when article is clicked. 
            newCard.addEventListener('click', (obj) => {
                const headline = obj.data.articles.headline
                console.log(headline)
            })
        })
    })
    .catch((error) => {
        console.log('Whoops!', error)
    })