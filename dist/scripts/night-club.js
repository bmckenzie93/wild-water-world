// Party Slideshow
let i = 0;
let partyImages = [];
let time = 2000;


partyImages[0] = './images/water-party-2.jpg';
partyImages[1] = './images/dj.jpg';
partyImages[2] = './images/dj-2.jpg';
partyImages[3] = './images/dj-5.jpg';


function changeImg() {
  document.getElementById('imgSlide').src = partyImages[i];

  if(i < partyImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;


// search drinks: event listner
document.getElementById('drink-search').addEventListener('keyup', (e) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`)
  .then(response => response.json())
  .then(resData => {
    const drinkList = resData.drinks;
    console.log(drinkList);


    document.getElementById('inject').innerHTML = '';

    drinkList.forEach((drink) => {
      document.getElementById('inject').innerHTML += `
        <div class="slide-grid-container">
          <article class="slide-grid-box">
            <img id="drink-image" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
            <div class="slide-grid-box-text">
              <h3 id="drink-name">
                ${drink.strDrink}
              </h3>
              <p id="drink-ingredient">Category : ${drink.strCategory}</p> <br>
              <div class="drink-description">
                <p id="drink-description">${drink.strInstructions}</p>
              </div>
            </div>
          </article>
        </div>
      `

      const img = document.getElementById('drink-image');
      img.src = drink.strDrinkThumb;
    })
  })
});