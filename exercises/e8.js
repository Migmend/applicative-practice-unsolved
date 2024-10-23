import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...

  let foundPlanet = data.planets.find(function (planet) {
    if (planet.moons) {
      if (planet.moons.includes(moonName)) {
        console.log(
          "this is planet: ",
          planet.name,
          " and this is moonName: ",
          moonName
        );
        console.log("this is planet name in return:", planet.name);
        return planet.name;
      }
    }
  });
  console.log("this is foundPlanet", foundPlanet.name);
  return foundPlanet.name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
