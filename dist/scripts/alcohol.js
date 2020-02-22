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

// Rum Drinks
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum')
.then(res => res.json())
.then(resData => {
  const rumDrinks = resData.drinks;
  console.log(rumDrinks);
  const rumImg = 
  rumDrinks.forEach(drink => {
    console.log(drink)
    const cocktail = new Cocktail(this.idDrink, this.strDrink, this.strCategory, this.strGlass, this.strInstructions, this.strThumb, this.strIngredient1, strMeasure1);
    console.log(cocktail)

  })

}) 
