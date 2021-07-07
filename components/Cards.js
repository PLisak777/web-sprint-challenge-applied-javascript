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
};

const enter = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    response.data.articles.javascript.forEach((article) => {
      const newCard = createCard(article);
      enter.appendChild(newCard);
      newCard.addEventListener('click', () => {
        const headline = article.headline;
        console.log(headline);
      });
    });
  })
  .catch((error) => {
    console.log('Whoops!', error);
  });
