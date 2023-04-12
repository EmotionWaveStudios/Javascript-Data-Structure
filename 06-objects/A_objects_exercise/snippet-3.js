// snippet 3
let dog = {
    name: "Manny",
    age: 5,
    breed: "pug",
    color: "fawn",
    favoriteFoods: ["bacon"],
  };
  
  console.log(dog.age); //5
  console.log(dog.breed); //pug
  console.log(dog.favoriteFoods); //["bacon"]
  
  dog.age++;
  dog.breed = dog.breed.toUpperCase();
  dog.favoriteFoods.push("sausage");
  
  console.log(dog.age); //5
  console.log(dog.breed); //PUG
  console.log(dog.favoriteFoods); //["bacon","sausage"]
  
  for (property in dog) {
    console.log(property + " is " + dog[property]);
  }
  //