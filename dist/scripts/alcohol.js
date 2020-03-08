class Cocktail {
  constructor(id, name, category, glass, instruction, thumbnail, ingredients, measurements) {
    this.id = id,
    this.name = name,
    this.category = category,
    this.glass = glass,
    this.instruction = instruction,
    this.thumbnail = thumbnail,
    this.ingredients = ingredients,
    this.measurements = measurements;
  }
}

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
    <hr>
      `

      
      
      
      console.log(drink);
      const img = document.getElementById('drink-image');
      img.src = drink.strDrinkThumb;
    })
    
  })
});





// .then(res => res.json())
// .then(resData => {
//   const rumDrinks = resData.drinks;
//   console.log(rumDrinks);
//   const rumImg = 
//   rumDrinks.forEach(drink => {
//     console.log(drink)
//     const cocktail = new Cocktail(this.idDrink, this.strDrink, this.strCategory, this.strGlass, this.strInstructions, this.strThumb, this.strIngredient1, strMeasure1);
//     console.log(cocktail)

//   })

// }) 
