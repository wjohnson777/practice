
var eatsPlants = true;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals) ? "omnivore" : (eatsPlants ? "herbivore" : (eatsAnimals ? "carnivore" : undefined));

console.log(category);
